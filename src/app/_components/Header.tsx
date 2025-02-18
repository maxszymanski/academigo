import Image from 'next/image'
import Button from './Button'

function Header() {
	return (
		<header className="bg-gradient-primary pt-16 md:pt-0">
			<div className="container mx-auto  flex flex-col md:flex-row items-center  md:items-stretch justify-between h-full px-4 lg:px-6  text-center ">
				<div className="text-second md:w-1/2 h-full flex md:items-start justify-center flex-col 2xl:gap-8 py-10 md:py-16  gap-4 w-full text-center md:text-left lg:py-28 xl:py-40 2xl:py-48">
					<h1 className=" 2xl:text-[44px] lg:text-3xl xl:text-4xl  font-extrabold tracking-wide 2xl:leading-[80px] text-xl leading-9 lg:leading-[50px] xl:leading-[65px] w-full">
						Odkrywaj i dziel się <br /> Najlepszymi kursami online. <br /> Wszystko w jednym miejscu!
					</h1>
					<p className="text-sm xl:text-base ">
						Zbiór linków do 10 000 zasobów – kursów, wydarzeń i innych materiałów edukacyjnych!
					</p>
					<Button href="/kursy" variant="white" restClass="py-3 px-7 mt-8 self-center md:self-start">
						Znajdź najlepsze kursy
					</Button>
				</div>
				<div className="flex-1 self-end ">
					<Image width={732} height={732} src="/student.png" alt="student" />
				</div>
			</div>
		</header>
	)
}

export default Header
