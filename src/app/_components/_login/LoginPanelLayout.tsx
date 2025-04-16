import Navigation from '../_ui/Navigation'
import LoginBg from './LoginBg'
import LoginFormBox from './LoginFormBox'
import LoginWelcome from './LoginWelcome'

function LoginPanelLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Navigation />

			<main className="relative flex min-h-screen bg-dark">
				<LoginBg />
				<div className="container relative z-20 mx-auto flex h-full min-h-screen w-full px-6 py-20 pb-4 lg:min-h-screen lg:max-w-full lg:py-0">
					<LoginFormBox>{children}</LoginFormBox>
					<LoginWelcome />
				</div>
			</main>
		</>
	)
}

export default LoginPanelLayout
