import Image from 'next/image'
import Button from '../_ui/Button'
import Student from '@/assets/student.webp'

function Header() {
	return (
		<header className="bg-gradient-primary pt-16 md:pt-0">
			<div className="container mx-auto flex h-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-stretch lg:px-6 xl:px-8">
				<div className="flex h-full w-full flex-col justify-center gap-4 py-10 text-center text-second md:w-1/2 md:items-start md:py-16 md:text-left lg:py-28 xl:py-40 2xl:gap-8 2xl:py-48">
					<h1 className="w-full text-xl font-extrabold leading-9 tracking-wide lg:text-3xl lg:leading-[50px] xl:text-4xl xl:leading-[65px] 2xl:text-[44px] 2xl:leading-[80px]">
						Odkrywaj i dziel się <br /> Najlepszymi kursami online. <br /> Wszystko w jednym miejscu!
					</h1>
					<p className="text-sm xl:text-base">
						Zbiór linków do 10 000 zasobów – kursów, wydarzeń i innych materiałów edukacyjnych!
					</p>
					<Button href="/kursy" variant="white" restClass="py-3 px-7 mt-8 self-center md:self-start">
						Znajdź najlepsze kursy
					</Button>
				</div>
				<div className="flex-1 md:self-end">
					<Image
						width={732}
						height={732}
						src={Student}
						alt="student"
						priority
						className="h-auto w-80 md:h-full md:w-full"
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
