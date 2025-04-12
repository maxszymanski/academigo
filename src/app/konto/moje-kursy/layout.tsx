import MyCourseNav from '@/app/_components/_panel/MyCourseNav'

function layout({ children }: { children: React.ReactNode }) {
	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold pb-12">Moje kursy</h1>
			<MyCourseNav />
			{children}
		</section>
	)
}

export default layout
