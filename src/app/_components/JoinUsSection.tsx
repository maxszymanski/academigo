import Image from 'next/image'
import Button from './Button'

function JoinUsSection() {
	return (
		<section className="  relative py-16   flex container mx-auto flex-col items-center md:flex-row justify-between md:justify-center lg:gap-12 xl:gap-20 lg:py-20 2xl:gap-40   xl:py-24 ">
			<Image
				src="/joinus.png"
				height={736}
				width={600}
				alt="student z laptopem"
				className="max-w-[350px] md:max-w-full"
			/>
			<div className="flex flex-col gap-6 lg:px-6 lg:self-end lg:w-fit px-6 w-full items-center lg:items-start pt-8 ">
				<h2 className="text-primary lg:font-medium font-semibold text-2xl leading-[50px] lg:text-4xl lg:leading-[60px]  xl:text-5xl xl:leading-[80px]  text-center md:text-left sm:text-3xl sm:leading-[50px] ">
					Razem możemy
					<br />
					Stworzyć coś <br />
					<span className="font-extrabold">Wyjątkowego!</span>
				</h2>
				<p className="text-sm leading-8 max-w-[500px] text-center lg:text-start mb-4 xl:text-base xl:leading-8 text-stone400 font-medium">
					Academigo to innowacyjna platforma, która łączy wszystkie kursy online w jednym miejscu. Chcemy
					rozwijać ją razem z pasjonatami edukacji, technologii i marketingu. Jeśli masz pomysły, tworzysz
					kursy lub chcesz współtworzyć coś wyjątkowego, dołącz do nas! Razem możemy stworzyć przestrzeń,
					która ułatwi tysiącom osób dostęp do wiedzy i rozwoju.
				</p>
				<Button
					href="/kontakt"
					restClass="min-w-[160px] py-4 px-10 text-lg xl:text-lg xl:py-5 xl:px-12 md:text-lg lg:text-lg">
					Porozmawiajmy!
				</Button>
			</div>
		</section>
	)
}

export default JoinUsSection
