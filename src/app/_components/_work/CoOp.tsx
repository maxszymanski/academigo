function CoOp() {
	return (
		<section className="w-full container mx-auto px-4 pb-6 lg:pb-7 xl:py-10 2xl:pb-12 ">
			<h2 className="  text-center text-xl md:text-2xl xl:text-4xl font-semibold">Współpraca</h2>
			<div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 flex flex-col  gap-10 lg:gap-16 xl:gap-20">
				<div className="flex flex-wrap gap-x-5 justify-evenly gap-y-7 text-center leading-[170%]">
					<div className="border border-stone50 shadow-md shadow-slate50 rounded-xl px-4 py-6 max-w-96 xl:max-w-md bg-transparent hover:bg-slate50 transition-colors duration-300">
						<p>
							Academigo to projekt stworzony przez jedną osobę <strong> ale dla wszystkich.</strong>
						</p>
					</div>
					<div className="border border-stone50 shadow-md shadow-slate50 rounded-xl px-4 py-6 max-w-96 xl:max-w-lg bg-transparent hover:bg-slate50 transition-colors duration-300">
						<p>
							Z pasji do nauki i potrzeby uporządkowania wiedzy w sieci <br />
							<strong>Bez reklam, bez prowizji, bez sprzedaży.</strong>
						</p>
					</div>
					<div className="border border-stone50 shadow-md shadow-slate50 rounded-xl px-4 py-6 max-w-96 bg-transparent hover:bg-slate50 transition-colors duration-300">
						<p>
							Ale żeby ten pomysł naprawdę urósł <strong>potrzebuję Twojej pomocy.</strong>{' '}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CoOp
