import Image from 'next/image'
import Button from '../_ui/Button'
import HappyStudent from '@/assets/hire.webp'

function LearnSkill() {
	return (
		<section className="container relative mx-auto flex flex-col items-center justify-between py-16 md:flex-row md:items-start lg:py-20 xl:py-24">
			<Image
				src={HappyStudent}
				height={768}
				width={600}
				alt="szcześliwy student"
				className=" h-auto w-auto max-h-[500px]  max-w-[350px] md:max-h-[720px] lg:max-w-full xl:max-h-[800px] 2xl:max-w-[600px] 2xl:max-h-max"
			/>
			<div className="flex w-full flex-col items-center gap-6 px-6 pt-8 md:items-start lg:w-1/2 lg:items-start lg:self-center lg:px-6">
				<h2 className="text-center text-2xl font-semibold leading-[50px] text-primary sm:text-3xl sm:leading-[50px] md:text-left lg:text-4xl lg:font-medium lg:leading-[60px] xl:text-5xl xl:leading-[80px]">
					Naucz się umiejętności <br />
					Zbuduj swoje portfolio. <br />
					<span className="font-extrabold">Zdobądź pracę!</span>
				</h2>
				<p className="mb-4 max-w-[500px] text-center text-sm font-medium leading-8 text-stone400 md:text-start xl:text-base xl:leading-8">
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
