import { Metadata } from 'next'
import CoOp from '../_components/_work/CoOp'
import Job from '../_components/_work/Job'
import Salary from '../_components/_work/Salary'
import WorkHeader from '../_components/_work/WorkHeader'
import WorkWithUs from '../_components/_work/WorkWithUs'

export const metadata: Metadata = {
	title: 'Dołącz do zespołu',
	description:
		'Szukasz ciekawego projektu do współpracy? Dołącz do rozwoju Academigo – platformy do wyszukiwania i porównywania kursów online. Szukamy frontendowców, backendowców i ludzi z pomysłami.',
	keywords:
		'współpraca, projekt open source, dołącz do zespołu, academigo, frontend developer, backend developer, rozwój platformy, kursy online, startup edukacyjny, platforma edukacyjna',
}

function page() {
	return (
		<>
			<WorkHeader />
			<main className="flex-1 flex items-center justify-center ">
				<div className="w-full  pt-6 md:pt-0 lg:pt-10  text-stone400 overflow-hidden">
					<CoOp />
					<Job />
					<Salary />
					<WorkWithUs />
				</div>
			</main>
		</>
	)
}

export default page
