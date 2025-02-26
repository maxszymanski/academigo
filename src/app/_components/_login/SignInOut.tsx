import Button from '../_ui/Button'
import Logo from '../_ui/Logo'

function SignInOut() {
    return (
        <div className="flex w-full flex-1 flex-grow flex-col items-center justify-center gap-12">
            <Logo />
            <Button
                variant="purple"
                href="/panel/zaloguj-sie"
                restClass="rounded-lg w-full"
            >
                Zaloguj się
            </Button>
            <Button
                variant="dark"
                href="/panel/rejestracja"
                restClass="rounded-lg w-full"
            >
                Zarejestruj się
            </Button>
        </div>
    )
}

export default SignInOut
