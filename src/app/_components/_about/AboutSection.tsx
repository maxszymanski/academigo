function AboutSection() {
	return (
		<section className="w-full container mx-auto px-4 pb-6 lg:pb-7 xl:pb-10 2xl:pb-12">
			<h2 className="  text-center text-base md:text-2xl xl:text-4xl font-semibold">
				Bo kursów jest za dużo, żeby szukać ich samemu
			</h2>
			<div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 flex flex-col  gap-10 lg:gap-16 xl:gap-20">
				<div className="w-full max-w-96 mx-auto md:max-w-full">
					<ul className=" leading-[170%] text-lg text-center font-semibold flex flex-col px-4 text-primary gap-8 md:flex-row items-center  md:justify-between lg:text-xl xl:text-2xl lg:py-6 2xl:text-3xl 2xl:px-10">
						<li>Nie uczymy</li>
						<li>Nie sprzedajemy kursów</li>
						<li>Pomagamy wybierać</li>
					</ul>
				</div>
				<div className="w-full lg:max-w-7xl mx-auto py-6">
					<div className="text-sm leading-[170%] font-medium text-center md:text-base md:leading-[170%] lg:text-lg  lg:text-left 2xl:text-xl 2xl:leading-[170%] ">
						<p className="mb-7 ">
							Academigo to miejsce stworzone przez i dla osób, które chcą mądrze wybrać kurs online – bez
							tracenia czasu.
						</p>
						<p className="mb-7 ">
							Wierzymy, że najlepsze decyzje edukacyjne podejmujemy razem, dlatego naszą misją jest
							stworzenie największej i najbardziej pomocnej bazy kursów w Polsce – wspólnie z naszą
							społecznością.
						</p>
						<p className="mb-7 ">
							Academigo to nie tylko wyszukiwarka kursów – to mapa po świecie edukacji online. Razem
							tworzymy narzędzie, które pomaga znaleźć kursy dopasowane do indywidualnych potrzeb, stylu
							nauki i celów rozwojowych.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
