import LoginForm from '@/app/_components/_login/LoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Logowanie',
	description:
		'Zaloguj się na swoje konto Academigo, aby uzyskać dostęp do zapisanych kursów, ocen, rankingu i panelu użytkownika. Dołącz do społeczności pasjonatów nauki online.',
	keywords:
		'logowanie, zaloguj się, academigo, konto użytkownika, dostęp do kursów, panel studenta, nauka online, platforma edukacyjna',
}

function Login() {
	return <LoginForm />
}

export default Login
