import Image from 'next/image'

function LoginWelcome() {
	return (
		<div className="hidden lg:flex w-3/5   h-full  flex-col  justify-center    text-[#EEEEEE] min-h-screen  mx-auto max-w-full items-center lg:py-6 gap-8">
			<div className="  flex flex-col justify-center  w-full max-w-[400px] xl:max-w-[500px] 2xl:max-w-[700px]">
				<h2 className="text-5xl xl:text-6xl 2xl:text-7xl 2xl:leading-[80px]    font-normal  leading-[55px] ">
					<span className="font-bold">Witaj </span>w portalu użytkownika
					<br />
				</h2>
				<p className="text-sm font-normal tracking-normal text-white text-left mt-5  ">
					Zarejestruj się lub zaloguj, aby uzyskać dostęp do swojego konta
				</p>
			</div>

			<Image src="/login.png" width={700} height={620} alt="zdjęcie" className="max-w-full h-auto" />
		</div>
	)
}

export default LoginWelcome
