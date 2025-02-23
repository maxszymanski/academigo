import Button from '../Button'
import Logo from '../Logo'

function SignInOut() {
	return (
		<div className="flex flex-col flex-grow justify-center flex-1 gap-12 items-center w-full ">
			<Logo />
			<Button variant="purple" href="/panel/zaloguj-sie" restClass="rounded-lg w-full">
				Zaloguj się
			</Button>
			<Button variant="dark" href="/panel/rejestracja" restClass="rounded-lg w-full">
				Zarejestruj się
			</Button>
		</div>
	)
}

export default SignInOut
