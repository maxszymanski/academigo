import Button from './Button'
import UserAvatar from './UserAvatar'

function AuthButton({ isUser = false, userAvatar }: { isUser?: boolean; userAvatar?: string }) {
	return (
		<li className="">
			{!isUser ? (
				<Button href={isUser ? '/konto' : '/panel/zaloguj-sie'} restClass=" xl:min-w-[160px]">
					Zaloguj się
				</Button>
			) : (
				<UserAvatar avatar={userAvatar} href="/panel" />
			)}
		</li>
	)
}

export default AuthButton
