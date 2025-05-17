import CoOp from '../_components/_work/CoOp'
import Job from '../_components/_work/Job'
import Salary from '../_components/_work/Salary'
import WorkHeader from '../_components/_work/WorkHeader'
import WorkWithUs from '../_components/_work/WorkWithUs'

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
