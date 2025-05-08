function ShowedCourses({ info }: { info: string }) {
	return (
		<div className="text-dark2/85 w-fit flex-shrink-0 text-sm">
			<p className="text-sm md:flex md:flex-col md:items-center lg:flex-row lg:text-base xl:pl-4">
				Wyświetlane kursy: <span className="font-semibold tracking-wider ml-1">{info}</span>
			</p>
		</div>
	)
}

export default ShowedCourses
