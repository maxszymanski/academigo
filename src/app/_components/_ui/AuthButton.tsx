import Button from './Button'
import UserNavButton from './UserNavButton'

function AuthButton({ isUser = false, userAvatar }: { isUser?: boolean; userAvatar?: string }) {
	return (
		<>
			{!isUser ? (
				<Button
					href={isUser ? '/konto' : '/panel/zaloguj-sie'}
					restClass=" xl:min-w-[160px] !text-xs sm:!text-sm md:!text-xs lg:!text-sm">
					Zaloguj się
				</Button>
			) : (
				<UserNavButton avatar={userAvatar} />
			)}
		</>
	)
}

export default AuthButton
