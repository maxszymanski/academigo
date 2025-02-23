import Navigation from '../Navigation'
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

			<main className=" flex relative min-h-screen    ">
				<LoginBg />
				<div className=" px-6 py-20 pb-4 relative z-20 w-full h-full flex container mx-auto  min-h-screen lg:min-h-screen  lg:max-w-full lg:py-0  ">
					<LoginFormBox>{children}</LoginFormBox>
					<LoginWelcome />
				</div>
			</main>
		</>
	)
}

export default LoginPanelLayout
