import Button from '../_components/_ui/Button'

export default async function Blog() {
	return (
		<>
			<header className="text-3xl  py-20 md:py-32 lg:text-5xl xl:text-7xl text-center text-second bg-gradient-primary ">
				{' '}
				<h1>Blog</h1>
			</header>
			<main className="flex-1 flex items-center justify-center">
				<div className="container mx-auto px-4">
					<div className="flex flex-col items-center gap-2 text-dark2 py-10">
						<h2 className="text-3xl text-dark2 lg-text-5xl">Strona w trakcie budowy</h2>
						<p>Ta część platformy jest jeszcze w trakcie tworzenia.</p>
						<p> Chcemy, by była wartościowa i dobrze zaprojektowana — dlatego chwilowo jej tu nie ma 😄</p>
						<p>
							Jeśli jesteś <strong>UX designerem</strong> lub <strong>frontend developerem</strong> i
							chcesz pomóc w budowie czegoś wartościowego — odezwij się!
						</p>
						<p> Zajrzyj na stronę współpraca, gdzie opisujemy, kogo aktualnie szukamy.</p>
						<Button variant="submit">Współpraca</Button>
					</div>
				</div>
			</main>
		</>
	)
}
