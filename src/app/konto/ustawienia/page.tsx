import { getUserAccount } from '@/app/_actions/auth'
import AccountInformation from '@/app/_components/_panel/AccountInformation'
import PasswordForm from '@/app/_components/_panel/PasswordForm'
import { User } from '@supabase/supabase-js'

async function Settings() {
	const user: User = await getUserAccount()

	const hasPassword: boolean = user.app_metadata?.providers?.includes('email')
	const isGoogleAccount: boolean = user.app_metadata?.providers?.includes('google')

	return (
		<section className="w-full px-4 lg:px-6 pb-8">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12 xl:mb-20">Ustawienia</h1>
			<div className="flex flex-wrap justify-evenly gap-7">
				{hasPassword && <PasswordForm />}
				<AccountInformation user={user} isGoogleAccount={isGoogleAccount} />
			</div>
		</section>
	)
}

export default Settings
