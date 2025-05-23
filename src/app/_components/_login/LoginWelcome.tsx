import Image from 'next/image'
import WelcomeImage from '@/assets/login.png'

function LoginWelcome() {
	return (
		<div className="mx-auto hidden h-full min-h-screen w-3/5 max-w-full flex-col items-center justify-center gap-8 text-[#EEEEEE] lg:flex lg:py-6 overflow-hidden">
			<div className="flex w-full max-w-[400px] flex-col justify-center xl:max-w-[500px] 2xl:max-w-[700px]">
				<h2 className="text-5xl font-normal leading-[55px] xl:text-6xl 2xl:text-7xl 2xl:leading-[80px]">
					<span className="font-bold">Witaj </span>w portalu użytkownika
					<br />
				</h2>
				<p className="mt-5 text-left text-sm font-normal tracking-normal text-white">
					Zarejestruj się lub zaloguj, aby uzyskać dostęp do swojego konta
				</p>
			</div>

			<Image src={WelcomeImage} width={700} height={450} alt="zdjęcie" className="min-w-[68%] max-w-[700px]" />
		</div>
	)
}

export default LoginWelcome
