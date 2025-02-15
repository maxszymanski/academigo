import Image from 'next/image'
import Button from './Button'

function Header() {
	return (
		<header className="bg-gradient-primary h-[800px]">
			<div className="xl:container xl:mx-auto w-full flex items-stretch justify-between h-full px-6">
				<div className="text-second w-1/2 h-full flex items-start justify-center flex-col gap-8">
					<h1 className="text-[44px] font-extrabold tracking-wide leading-[80px]">
						Odkrywaj i dziel się <br /> Najlepszymi kursami online. Wszystko w jednym miejscu!
					</h1>
					<p className="">
						Zbiór linków do 10 000 zasobów – kursów, wydarzeń i innych materiałów edukacyjnych!
					</p>
					<Button href="/kursy" text="Znajdź najlepsze kursy" variant="white" restClass="py-4 mt-8" />
				</div>
				<div className="flex-1 self-end">
					<Image width={732} height={732} src="/student.png" alt="student" />
				</div>
			</div>
		</header>
	)
}

export default Header
