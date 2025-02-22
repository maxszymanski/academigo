import LoginBg from '../_components/_login/LoginBg'
import LoginFormBox from '../_components/_login/LoginFormBox'
import LoginWelcome from '../_components/_login/LoginWelcome'
import Navigation from '../_components/Navigation'

function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Navigation />
			<main className=" flex relative min-h-screen lg:min-h-screen  bg-dark ">
				<LoginBg />
				<div className=" px-6 py-20 pb-4 relative z-20 w-full h-full flex container mx-auto  min-h-screen lg:min-h-screen  lg:max-w-full lg:py-0  ">
					<LoginFormBox>{children}</LoginFormBox>
					<LoginWelcome />
				</div>
			</main>
		</>
	)
}

export default AuthLayout
