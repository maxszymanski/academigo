import Button from '../_ui/Button'

function WorkWithUs() {
	return (
		<section className="w-full  px-4 pb-6 lg:pb-7 xl:py-10 2xl:pb-12 xl:pt-10 bg-[#FBFDFD]">
			<div className="container mx-auto w-full">
				<h2 className="  text-center text-xl md:text-2xl xl:text-4xl font-semibold text-primary pt-10 xl:pt-0">
					Dołącz do Academigo
				</h2>
				<div className="flex flex-col gap-2 items-center justify-center py-6 lg:py-8 xl:text:lg xl:py-12 xl:gap-3 font-medium">
					<p className="text-center">Jeśli chcesz pomóc, napisz do nas</p>
					<p className="text-center">
						Napisz, co robisz, czym się interesujesz i w czym chciałbyś/chciałabyś pomóc.
					</p>
					<p className="text-center mb-5">Nie liczy się doświadczenie – liczy się chęć działania.</p>
					<Button href="mailto:kontakt@academigo.pl">kontakt@academigo.pl</Button>
					<p className="text-center mt-5">Albo napisz przez formularz na stronie.</p>
					<p className="text-center text-xl xl:text-2xl mt-2">Zróbmy to razem!</p>
				</div>
			</div>
		</section>
	)
}

export default WorkWithUs
