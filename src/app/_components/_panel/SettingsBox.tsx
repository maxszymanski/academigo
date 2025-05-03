function SettingsBox({
	children,
	title,
	long = false,
}: {
	children: React.ReactNode
	title: string
	large?: string
	long?: boolean
}) {
	return (
		<div
			className={`w-full flex-shrink-0 flex-grow-0 rounded-lg bg-white px-5 sm:px-10 py-8 text-dark2 shadow-md shadow-stone-200  border border-slate-200 flex flex-col ${long ? 'max-w-3xl' : 'max-w-lg'} `}>
			<h1 className="text-lg font-medium pb-8">{title}</h1>
			{children}
		</div>
	)
}

export default SettingsBox
