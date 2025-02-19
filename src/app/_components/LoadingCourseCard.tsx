function LoadingCourseCard() {
	return (
		<div className="w-[330px] h-[320px] rounded-2xl overflow-hidden bg-white shadow-md shadow-stone-200 border flex flex-col flex-shrink-0">
			<div className="w-[330px] h-[200px] bg-[#eee] animate-shine bg-gradient-stone   bg-[length:200%_100%]"></div>
			<div className="py-3 px-3 flex flex-col justify-between flex-1">
				<p className="w-4/5 h-5 rounded-lg bg-[#eee] animate-shine bg-gradient-stone   bg-[length:200%_100%]"></p>
				<p className="w-1/2 h-5 rounded-lg bg-[#eee] animate-shine bg-gradient-stone   bg-[length:200%_100%]"></p>
				<p className="w-full h-5 rounded-lg bg-[#eee] animate-shine bg-gradient-stone   bg-[length:200%_100%]"></p>
			</div>
		</div>
	)
}

export default LoadingCourseCard
