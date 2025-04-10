'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../utils/supabase/server'
import { loginSchema, signUpSchema } from '../_lib/validators'

export async function login(formData: FormData) {
	const result = loginSchema.safeParse({
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	})

	if (!result.success) {
		return { error: 'Niepoprawne dane logowania' }
	}

	const supabase = await createClient()

	const { error } = await supabase.auth.signInWithPassword(result.data)

	if (error) {
		return { error: 'Niepoprawne dane logowania' }
	}

	revalidatePath('/konto')
	redirect('/konto')
}
export async function loginWithGoogle() {
	const supabase = await createClient()

	const { data } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: 'http://localhost:3000/auth/callback',
			queryParams: {
				access_type: 'offline',
				prompt: 'consent',
			},
		},
	})

	if (data.url) {
		redirect(data.url)
	}
}

export async function signup(formData: FormData) {
	const result = signUpSchema.safeParse({
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		confirmPassword: formData.get('confirmPassword') as string,
		username: formData.get('username') as string,
		gender: formData.get('gender') as string,
	})

	if (!result.success) {
		return { error: 'Wystąpił problem podczas rejestracji, proszę spróbować ponownie.' }
	}

	const supabase = await createClient()

	const { data: existingUser } = await supabase.from('users').select('id').eq('email', result.data.email).single()

	if (existingUser) {
		return {
			error: 'Ten adres e-mail jest już zarejestrowany w naszym systemie. Spróbuj się zalogować lub użyj innego adresu.',
		}
	}

	const { data: authData, error } = await supabase.auth.signUp({
		email: result.data.email,
		password: result.data.password,
	})

	if (error) {
		return { error: 'Wystąpił problem podczas rejestracji, proszę spróbować ponownie.' }
	}

	const userId = authData.user?.id

	if (userId) {
		const { error: createError } = await supabase.from('users').insert({
			id: userId,
			email: result.data.email,
			username: result.data.username,
			gender: result.data.gender,
		})
		if (createError) {
			return { error: 'Wystąpił problem podczas rejestracji, proszę spróbować ponownie.' }
		}
	}

	revalidatePath('/panel/rejestracja')
	redirect('/')
}
export async function logout() {
	const supabase = await createClient()

	const { error } = await supabase.auth.signOut()
	if (error) throw new Error(error.message)

	revalidatePath('/', 'layout')
	redirect('/')
}

export async function getUser() {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	return authData.user
}

export async function getCurrentUser() {
	await new Promise(resolve => setTimeout(resolve, 3000))

	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	const userEmail = authData.user?.email

	const { data: user, error } = await supabase.from('users').select('*').eq('email', userEmail).single()

	if (error) throw new Error(error.message)

	return user

	// revalidatePath('/', 'layout')
}
