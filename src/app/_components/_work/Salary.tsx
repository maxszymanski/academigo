function Salary() {
	return (
		<section className="w-full  px-4 pb-6 lg:pb-7 xl:py-10 2xl:pb-12 bg-[#FBFDFD]">
			<div className="container mx-auto w-full">
				<h2 className="  text-center text-xl md:text-2xl xl:text-4xl font-semibold">Co w zamian?</h2>
				<div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 flex flex-col  gap-10 lg:gap-16 xl:gap-20">
					<div className="flex flex-wrap gap-x-5 justify-evenly gap-y-7 text-center items-start leading-[170%]">
						<div className="border border-stone50 shadow-md bg-white shadow-slate50 rounded-xl px-4 py-6 max-w-96 xl:max-w-md bg-transparent hover:bg-slate50 transition-colors duration-300">
							<p>Nie oferuję wynagrodzenia – przynajmniej jeszcze nie.</p>
						</div>
						<div className="border border-stone50 shadow-md bg-white shadow-slate50 rounded-xl px-4 py-6 max-w-96 xl:max-w-xl bg-transparent hover:bg-slate50 transition-colors duration-300 text-center sm:text-left">
							<h3 className="font-semibold text-lg lg:text-xl text-primary sm:pl-4 pb-4">Zyskasz:</h3>
							<ul className="w-full flex flex-col gap-4 sm:font-semibold sm:mx-4 font-medium">
								<li>Realny wpływ na rozwój platformy</li>
								<li>Wpis do portfolio i doświadczenie w realnym projekcie</li>
								<li>Działanie w otwartym, uczciwym klimacie</li>
								<li>Pełne uznanie i widoczność na stronie</li>
								<li>Wspólne budowanie czegoś, co ma sens</li>
							</ul>
						</div>
						<div className="border border-stone50 shadow-md bg-white shadow-slate50 rounded-xl px-4 py-6 max-w-96 bg-transparent hover:bg-slate50 transition-colors duration-300">
							<p>
								To projekt budowany z pasji i potrzeby – coś, co ma szansę zmienić sposób, w jaki ludzie
								szukają wiedzy online.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Salary
