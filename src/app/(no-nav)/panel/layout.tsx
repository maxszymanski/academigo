import LoginBg from '../../_components/_login/LoginBg'
import LoginFormBox from '../../_components/_login/LoginFormBox'
import LoginWelcome from '../../_components/_login/LoginWelcome'

function layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<main className="relative flex min-h-dvh lg:min-h-screen bg-dark">
				<LoginBg />
				<div className="container relative z-20 mx-auto flex h-full min-h-dvh w-full px-6 pb-4 lg:min-h-screen lg:max-w-full lg:py-0">
					<LoginFormBox>{children}</LoginFormBox>
					<LoginWelcome />
				</div>
			</main>
		</>
	)
}

export default layout
