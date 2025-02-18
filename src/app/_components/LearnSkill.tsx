import Button from './Button'
import Ellispe from './Ellispe'

function LearnSkill() {
	return (
		<section className="  relative py-20 sm:py-20  xl:pt-48  flex container mx-auto lg:flex-row-reverse md:pt-24 lg:pt-36 2xl:pt-52 ">
			<Ellispe />
			<div className="flex flex-col gap-6 lg:px-6 lg:self-end lg:w-1/2 px-6 w-full items-center lg:items-start">
				<h2 className="text-primary font-medium text-2xl leading-[50px] xl:text-4xl xl:leading-[60px] 2xl:leading-[80px] 2xl:text-5xl text-center md:text-left sm:text-3xl sm:leading-[50px] ">
					Naucz się umiejętności <br />
					Zbuduj swoje portfolio. <br />
					<span className="font-extrabold">Zdobądź pracę!</span>
				</h2>
				<p className="text-sm leading-8 max-w-[500px] font-light text-center lg:text-start mb-4 xl:text-base xl:leading-8">
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
