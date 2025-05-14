import Button from '../_ui/Button'

function WhyUsSection() {
	return (
		<section className="py-12  lg:py-16 xl:pt-20 bg-slate50 w-full ">
			<div className="container mx-auto px-4">
				<h2 className="  text-center text-base md:text-2xl xl:text-4xl font-semibold">
					Dlaczego warto korzystać z Academigo?
				</h2>
				<div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 flex flex-col  gap-10 lg:gap-16 xl:gap-20">
					<div className="w-full max-w-96 mx-auto md:max-w-full">
						<ul className="  text-center font-semibold flex flex-col px-4 text-primary gap-10 lg:flex-row items-center  lg:justify-between lg:text-xl xl:text-2xl lg:py-6 ">
							<li className="flex flex-col gap-3  md:gap-4 xl:gap-5">
								<h3>Wszystko w jednym miejscu</h3>
								<p className="text-dark2/90 text-sm max-w-96 leading-[170%] xl:text-base xl:font-medium xl:leading-[170%]">
									Nie przeskakuj między 10 platformami <br /> Sprawdź, który kurs warto wybrać <br />
									Bezpośrednio na Academigo.
								</p>
							</li>
							<li className="flex flex-col gap-3 md:gap-4 xl:gap-5">
								<h3>Buduj społeczność</h3>
								<p className="text-dark2/90 text-sm max-w-96 leading-[170%] xl:text-base xl:font-medium xl:leading-[170%]">
									Zobacz, co naprawdę sądzą inni <br />
									Ty pomagasz im, oni pomagają Tobie
									<br />
									Prosto i uczciwie.
								</p>
							</li>
							<li className="flex flex-col gap-3 md:gap-4 xl:gap-5">
								<h3>Kursy dopasowane do Ciebie</h3>
								<p className="text-dark2/90 text-sm max-w-96 leading-[170%] xl:text-base xl:font-medium xl:leading-[170%]">
									Oceniaj, komentuj, filtruj i porównuj <br /> Znajdź kurs idealny do Twojego poziomu{' '}
									<br /> Celów i stylu nauki
								</p>
							</li>
						</ul>
						<h3 className="  text-center text-base md:text-2xl xl:text-4xl font-semibold  pt-10 xl:pt-20 2xl:pt-24">
							Społeczność tworzy jakość
						</h3>
						<div className="w-full lg:max-w-7xl mx-auto pt-10 lg:pt-16 xl:pt-20">
							<div className="text-sm leading-[170%] text-center md:text-base md:leading-[170%] lg:text-lg  lg:text-left 2xl:text-xl 2xl:leading-[170%] ">
								<p className="mb-5 2xl:mb-6">
									Academigo to platforma tworzona przez ludzi takich jak Ty.
								</p>
								<p className="mb-5 2xl:mb-6">
									Każda opinia, każda ocena i każde polecenie pomaga innym dokonać lepszego wyboru.
								</p>
								<p className="mb-5 2xl:mb-6">
									Chcesz pomóc innym? Dodaj opinię o kursie, który zrobiłeś.
								</p>
								<p className="mb-5 2xl:mb-6">
									Znasz wartościowy materiał z Udemy, YouTube, Skillshare czy jakiejkolwiek innej
									platformy, lepszy niż ten, który polecają wszyscy?
								</p>
								<p className="mb-5 2xl:mb-6">Pomóż innym go znaleźć, ocenić i zdecydować, czy warto.</p>
								<p className="mb-5 2xl:mb-6">
									Nie musisz być właścicielem kursu, żeby się nim podzielić!
								</p>
								<div className="w-full max-w-72 mx-auto py-4  lg:max-w-full">
									<Button
										href="/konto/dodaj-kurs"
										restClass="!py-3.5 md:!text-sm lg:!max-w-72 xl:!text-base">
										Dodaj go do Academigo
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyUsSection
