import { Metadata } from 'next'
import SignInOut from '../../_components/_login/SignInOut'

export const metadata: Metadata = {
	title: 'Zaloguj się lub załóż konto',
	description:
		'Uzyskaj dostęp do swojego panelu użytkownika, zapisanych kursów i rankingu. Zaloguj się na swoje konto Academigo lub zarejestruj się, aby dołączyć do społeczności.',
	keywords:
		'logowanie, rejestracja, zaloguj się, załóż konto, academigo, panel użytkownika, konto użytkownika, dostęp do kursów',
}

function Panel() {
	return <SignInOut />
}

export default Panel
