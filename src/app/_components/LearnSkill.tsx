import Image from 'next/image'
import Button from './Button'

function LearnSkill() {
	return (
		<section className="  relative py-16   flex container mx-auto flex-col md:flex-row justify-between lg:py-20 items-center  md:items-start xl:py-24">
			<Image
				src="/hire.jpg"
				height={768}
				width={600}
				alt="szcześliwy student"
				className="max-w-[350px] lg:max-w-full max-h-[500px] md:max-h-[720px] xl:max-h-max"
			/>
			<div className="flex flex-col gap-6 lg:px-6 lg:self-center lg:w-1/2 px-6 w-full items-center lg:items-start pt-8 md:items-start">
				<h2 className="text-primary lg:font-medium font-semibold text-2xl leading-[50px] lg:text-4xl lg:leading-[60px]  xl:text-5xl xl:leading-[80px]  text-center md:text-left sm:text-3xl sm:leading-[50px] ">
					Naucz się umiejętności <br />
					Zbuduj swoje portfolio. <br />
					<span className="font-extrabold">Zdobądź pracę!</span>
				</h2>
				<p className="text-sm leading-8 max-w-[500px] text-center md:text-start mb-4 xl:text-base xl:leading-8 text-stone400 font-medium ">
					Academigo to platforma edukacyjna, która pomaga w łatwym dostępie do najlepszych kursów online.
					Przeglądaj i znajdź kursy z zakresu marketingu cyfrowego, programowania, projektowania graficznego,
					finansów, rozwoju osobistego i wielu innych. Idealne miejsce dla każdego, kto chce rozwijać swoje
					umiejętności i poszerzać horyzonty zawodowe.
				</p>
				<Button
					href="/kursy"
					restClass="min-w-[160px] py-4 px-10 text-lg xl:text-lg xl:py-5 xl:px-12 md:text-lg lg:text-lg">
					Zobacz kursy
				</Button>
			</div>
		</section>
	)
}

export default LearnSkill
