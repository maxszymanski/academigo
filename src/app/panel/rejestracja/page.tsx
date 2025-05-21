import RegistrationForm from '@/app/_components/_login/RegistrationForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Rejestracja',
	description:
		'Załóż konto na Academigo, aby korzystać z personalizowanego panelu, zapisywać ulubione kursy, oceniać je i zdobywać punkty w rankingu społeczności.',
	keywords:
		'rejestracja, załóż konto, Academigo, nowe konto, dołącz do społeczności, edukacja online, zapisane kursy, ranking użytkowników',
}

function SignIn() {
	return <RegistrationForm />
}

export default SignIn
