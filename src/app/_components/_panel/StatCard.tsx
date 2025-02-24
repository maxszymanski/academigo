interface Stat {
	children: React.ReactNode
	number: string
	statType: string
}

function StatCard({ children, number = '0', statType }: Stat) {
	return (
		<div
			tabIndex={1}
			className="bg-white w-44 h-44 p-3 flex flex-col items-center justify-between rounded-3xl flex-shrink-0 my-6 shadow-md shadow-stone-200 border-[3px] border-transparent transition-colors duration-300 focus:border-primary outline-none ">
			{children}

			<p className="text-dark font-semibold text-lg">{number}</p>
			<p className="text-xs text-dark/70">{statType}</p>
		</div>
	)
}

export default StatCard
