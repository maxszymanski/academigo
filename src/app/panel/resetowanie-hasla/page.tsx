import ResetPassword from '@/app/_components/_login/ResetPassword'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Resetowanie hasła',
	description:
		'Zresetuj swoje hasło do konta Academigo, aby odzyskać dostęp do zapisanych kursów, ocen i panelu użytkownika.',
	keywords:
		'resetowanie hasła, odzyskiwanie hasła, Academigo, zapomniane hasło, bezpieczeństwo konta, dostęp do konta',
}

function page() {
	return <ResetPassword />
}

export default page
