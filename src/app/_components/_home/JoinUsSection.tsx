import Image from 'next/image'
import Button from '../_ui/Button'
import JoinUs from '@/assets/join.webp'

function JoinUsSection() {
	return (
		<section className="container relative mx-auto flex flex-col items-center justify-between py-16 md:flex-row md:justify-center lg:gap-12 lg:py-20 xl:gap-20 xl:py-24 2xl:gap-40">
			<Image src={JoinUs} height={736} width={600} alt="studenci" className="max-w-[400px] lg:max-w-full" />
			<div className="flex w-full flex-col items-center gap-6 px-6 md:items-start lg:w-fit lg:self-end lg:px-6">
				<h2 className="text-center text-2xl font-semibold leading-[50px] text-primary sm:text-3xl sm:leading-[50px] md:text-left lg:text-4xl lg:font-medium lg:leading-[60px] xl:text-5xl xl:leading-[80px]">
					Razem możemy
					<br />
					Stworzyć coś <br />
					<span className="font-extrabold">Wyjątkowego!</span>
				</h2>
				<p className="mb-4 max-w-[500px] text-center text-sm font-medium leading-8 text-stone400 md:text-start xl:text-base xl:leading-8">
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
