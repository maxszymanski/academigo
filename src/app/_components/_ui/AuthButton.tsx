import Button from './Button'

function AuthButton({ isUser = false }: { isUser?: boolean }) {
	return (
		<li>
			<Button href={isUser ? '/konto' : '/panel/zaloguj-sie'} restClass=" xl:min-w-[160px]">
				{isUser ? 'Panel studenta' : 'Zaloguj się'}
			</Button>
		</li>
	)
}

export default AuthButton
