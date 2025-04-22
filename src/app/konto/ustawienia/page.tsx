import { getUserAccount } from '@/app/_actions/auth'
import AccountInformation from '@/app/_components/_panel/AccountInformation'
import PasswordForm from '@/app/_components/_panel/PasswordForm'
import { User } from '@supabase/supabase-js'

async function Settings() {
	const user: User | { error: string } = await getUserAccount()

	if ('error' in user) {
		return (
			<section className="w-full px-4 lg:px-6 ">
				<h1 className="text-primary text-3xl text-center font-semibold mb-12 xl:mb-20">Ustawienia</h1>
				<p className="text-red-500 text-center">Wystąpił błąd: {user.error}</p>
			</section>
		)
	}

	const hasPassword: boolean = user.app_metadata?.providers?.includes('email')

	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12 xl:mb-20">Ustawienia</h1>
			<div>
				{hasPassword && <PasswordForm />}
				<AccountInformation user={user} isGoogleAccount={!hasPassword} />
			</div>
		</section>
	)
}

export default Settings
