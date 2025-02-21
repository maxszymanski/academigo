import Image from 'next/image'

function Login() {
	return (
		<main className=" flex relative min-h-screen ">
			<div className="absolute w-full h-full top-0 left-0 z-10 flex">
				<div className=" bg-[#1C1D21]  w-1/2  h-full"></div>
				<div className="w-1/2 bg-[url(/bg-login.png)] bg-center  h-full "></div>
			</div>
			<div className=" pt-6 pb-4 relative z-20 w-full">
				<div className="container  mx-auto h-full flex  ">
					<div className="  w-1/2  h-full "></div>
					<div className="w-1/2  pl-20 h-full  flex flex-col items-center justify-end gap-10 text-[#EEEEEE]">
						<div className="pl-12">
							<h2 className="text-[80px] leading-[80px]    font-normal">
								<span className="font-bold">Witaj </span>w portalu użytkownika
								<br />
							</h2>
							<p className="text-sm font-normal tracking-normal text-white text-left mt-5 xl:text-base">
								Zaloguj się na swoje konto
							</p>
						</div>
						<Image src="/login.png" width={837} height={620} alt="zdjęcie" className="ml-5 " />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Login
