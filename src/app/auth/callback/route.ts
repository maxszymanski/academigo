import { NextResponse } from 'next/server'
import { createClient } from '@/app/utils/supabase/server'

export async function GET(request: Request) {
	const { searchParams, origin } = new URL(request.url)
	const code = searchParams.get('code')
	const next = searchParams.get('next') ?? '/konto'

	if (code) {
		const supabase = await createClient()
		const { data: session, error } = await supabase.auth.exchangeCodeForSession(code)

		if (!error && session?.user) {
			const userEmail = session.user.email

			const { data: existingUser } = await supabase.from('users').select('*').eq('email', userEmail).single()

			if (existingUser) {
				return NextResponse.redirect(`${origin}${next}`)
			} else {
				const userId = session.user.id
				const firstName = session.user.user_metadata.full_name?.split(' ')[0] || ''
				const avatar = session.user.user_metadata.avatar_url

				const { error: insertError } = await supabase.from('users').insert({
					id: userId,
					email: userEmail,
					username: firstName || '',
					gender: null,
					avatar: avatar,
				})

				if (insertError) {
					throw new Error('Błąd podczas dodawania użytkownika do bazy:', insertError)
				}
			}

			const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
			const isLocalEnv = process.env.NODE_ENV === 'development'

			if (isLocalEnv) {
				return NextResponse.redirect(`${origin}${next}`)
			} else if (forwardedHost) {
				return NextResponse.redirect(`https://${forwardedHost}${next}`)
			} else {
				return NextResponse.redirect(`${origin}${next}`)
			}
		}
	}
}
