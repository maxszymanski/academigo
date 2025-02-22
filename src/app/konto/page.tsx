import Button from '../_components/Button'

function Login() {
	return (
		<div className="flex flex-col flex-grow justify-center flex-1 gap-12">
			<Button variant="purple" href="/konto/zaloguj-sie" restClass="rounded-lg">
				Zaloguj się
			</Button>
			<Button variant="dark" href="/konto/rejestracja" restClass="rounded-lg">
				Zarejestruj się
			</Button>
		</div>
	)
}

export default Login
