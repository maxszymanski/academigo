function LoadingCourseCard() {
	return (
		<div className="flex h-[370px] w-[330px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-md shadow-stone-200">
			<div className="h-[200px] w-[330px] animate-shine bg-[#eee] bg-gradient-stone bg-[length:200%_100%]"></div>
			<div className="flex flex-1 flex-col justify-between px-3 py-3">
				<p className="h-5 w-4/5 animate-shine rounded-lg bg-[#eee] bg-gradient-stone bg-[length:200%_100%]"></p>
				<p className="h-5 w-1/2 animate-shine rounded-lg bg-[#eee] bg-gradient-stone bg-[length:200%_100%]"></p>
				<p className="h-5 w-1/2 animate-shine rounded-lg bg-[#eee] bg-gradient-stone bg-[length:200%_100%]"></p>
				<p className="h-5 w-full animate-shine rounded-lg bg-[#eee] bg-gradient-stone bg-[length:200%_100%]"></p>
			</div>
		</div>
	)
}

export default LoadingCourseCard
