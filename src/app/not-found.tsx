import Footer from './_components/_footer/Footer'
import Button from './_components/_ui/Button'

function NotFound() {
	return (
		<>
			<main className="text-purple mt-4 flex-1 text-center">
				<section className="relative container mx-auto flex flex-col items-center justify-between px-8 pt-16 pb-24 md:pt-8 xl:flex-wrap xl:justify-evenly">
					<p className="text-primary3 text-[8rem] font-extrabold sm:text-[10rem] xl:text-[15rem]">404</p>
					<div className="flex w-fit flex-col items-center">
						<h1 className="mb-10 text-3xl leading-[170%] font-semibold uppercase xl:text-4xl xl:leading-[190%]">
							<span className="text-6xl font-bold xl:text-[7rem]">OOPS!</span> <br /> Nie znaleziono
							strony
						</h1>
						<Button variant="purple" restClass="" href="/">
							Strona główna
						</Button>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default NotFound
