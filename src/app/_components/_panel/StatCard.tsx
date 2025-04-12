import Link from 'next/link'

interface Stat {
	children: React.ReactNode
	number: string
	statType: string
	href: string
}

function StatCard({ children, number = '-', href, statType }: Stat) {
	return (
		<Link
			href={`/konto/moje-kursy/${href}`}
			className="my-6 flex h-44 w-44 flex-shrink-0 flex-col items-center justify-between rounded-3xl border-[3px] border-transparent bg-white p-3 shadow-md shadow-stone-200 outline-none transition-colors duration-300 hover:border-primary focus:border-primary xl:h-48 xl:w-48 xl:py-4  ">
			{children}

			<p className="text-lg font-semibold text-dark">{number}</p>
			<p className="text-xs text-dark/70 xl:text-sm">{statType}</p>
		</Link>
	)
}

export default StatCard
