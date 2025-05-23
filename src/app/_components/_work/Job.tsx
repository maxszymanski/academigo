import SingleJob from './SingleJob'
import Front from '@/assets/front.webp'
import Designer from '@/assets/designer.webp'
import Backend from '@/assets/backend.webp'
import Social from '@/assets/social.webp'
import Tester from '@/assets/tester.webp'
import Writter from '@/assets/writer.webp'
import Lawyer from '@/assets/lawyer.webp'
import Button from '../_ui/Button'

function Job() {
	return (
		<section className="w-full  px-4 pb-6 lg:pb-7 xl:pb-10 2xl:pb-12 xl:pt-10 ">
			<h2 className="  text-center text-xl md:text-2xl xl:text-4xl font-semibold pt-6 md:lg:pt-12 xl:pt-16 xl:pb-10">
				Kogo szukamy?
			</h2>
			<div className=" flex flex-col  gap-10 lg:gap-16 xl:gap-20">
				<div className="flex flex-col gap-y-10 leading-[170%]">
					<SingleJob
						job={Front}
						title="Front-End Developer"
						description="Potrzebujmy kogoś, kto pomoże rozwijać interfejs strony, wdrażać nowe funkcje, poprawiać
                                            użyteczność i sprawić, by platforma działała płynnie na różnych urządzeniach. Jeśli lubisz
                                            budować nowoczesne i przyjazne dla użytkownika aplikacje, bardzo się przydasz!"
					/>
					<SingleJob
						odd
						job={Backend}
						title="Backend Developer"
						description="Chcemy stworzyć backend od podstaw – stabilny, nowoczesny i elastyczny, który pozwoli przenieść platformę na własną infrastrukturę. Szukamy osoby, która zna się na tworzeniu API, bazach danych i bezpieczeństwie i chce wziąć udział w czymś większym niż kolejny projekt do portfolio."
					/>
					<SingleJob
						job={Designer}
						title="UI/UX Designer"
						description="Platforma działa, ale nie wszystko wygląda i działa tak dobrze, jak mogłoby. Potrzebujemy kogoś, kto spojrzy na to świeżym okiem, zaproponuje lepsze rozwiązania, poprawi wygodę użytkownika i sprawi, że poruszanie się po stronie będzie po prostu przyjemne."
					/>
					<SingleJob
						odd
						job={Tester}
						title="Tester / QA"
						description="Nie wszystko da się wychwycić samemu. Szukamy osoby, która pomoże sprawdzać platformę, zgłaszać błędy, podsuwać rozwiązania i dbać o jakość – zarówno techniczną, jak i funkcjonalną."
					/>
					<SingleJob
						job={Social}
						title="Specjalista ds. Social Media"
						description="Academigo potrzebuje widoczności. Jeśli potrafisz prowadzić profile w social mediach, budować społeczność i opowiadać o projektach tak, żeby ludzie chcieli do nich dołączyć – Twoje wsparcie będzie bezcenne!"
					/>
					<SingleJob
						odd
						job={Lawyer}
						title="Specjalista ds. RODO"
						description="Chcęmy, żeby Academigo było bezpieczne i zgodne z przepisami. Potrzebujemy osoby, która pomoże przygotować politykę prywatności, regulamin i zadba o zgodność platformy z RODO oraz innymi wymogami prawnymi. Nie chodzi o wielką papierologię – tylko o to, żeby wszystko było przejrzyste, uczciwe i legalne."
					/>
					<SingleJob
						job={Writter}
						title="Copywriter"
						description="Na stronie pojawia się coraz więcej treści – opisy kursów, artykuły, sekcje informacyjne. Przyda się ktoś, kto potrafi pisać jasno, ciekawie i zrozumiale, a do tego pomoże nadać całości spójny język."
					/>
				</div>
			</div>
			<div className="w-full max-w-72 mx-auto py-10 xl:pb-5 2xl:max-w-96">
				<Button
					href="/kontakt"
					variant="submit"
					restClass="!border-primary2 hover:!border-primary xl:!text-xl xl:!font-medium">
					Dołącz do zespołu!
				</Button>
			</div>
		</section>
	)
}

export default Job
