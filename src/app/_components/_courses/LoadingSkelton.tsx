import LoadingCourseCard from './LoadingCourseCard'

function LoadingSkelton() {
	return (
		<div className="flex w-full flex-wrap justify-center gap-x-5 gap-y-12 pt-12 md:gap-x-8 lg:justify-evenly ">
			{Array.from({ length: 3 }, (_, i) => (
				<LoadingCourseCard key={i} />
			))}
		</div>
	)
}

export default LoadingSkelton
