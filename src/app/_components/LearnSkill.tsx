import Image from 'next/image'
import Button from './Button'

function LearnSkill() {
	return (
		<section className="  relative pt-24 xl:pt-48  flex container mx-auto flex-row-reverse ">
			<div className="hidden lg:block h-full w-[1220px] absolute -left-[70%] xl:-left-[50%] 2xl:-left-[40%]  top-32">
				<Image
					src="/egg.jpg"
					height={860}
					width={1220}
					alt="elipsa w kształcie jajka"
					className="object-cover"
				/>
			</div>
			<div className="flex flex-col gap-5 lg:px-6 self-end w-1/2 ">
				<h2 className="text-primary text-4xl leading-[60px]">
					Naucz się umiejętności <br />
					Zbuduj swoje portfolio. <br />
					<span className="font-bold">Zdobądź pracę!</span>
				</h2>
				<p className="text-sm leading-8">
					Academigo to platforma edukacyjna, która pomaga w łatwym dostępie do najlepszych kursów online.
					Przeglądaj i znajdź kursy z zakresu marketingu cyfrowego, programowania, projektowania graficznego,
					finansów, rozwoju osobistego i wielu innych. Idealne miejsce dla każdego, kto chce rozwijać swoje
					umiejętności i poszerzać horyzonty zawodowe.
				</p>
				<Button href="/kursy">Odkryj</Button>
			</div>
		</section>
	)
}

export default LearnSkill
