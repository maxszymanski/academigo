function SettingsBox({ children, title }: { children: React.ReactNode; title: string }) {
	return (
		<div className="w-full max-w-md flex-shrink-0 flex-grow-0 rounded-lg bg-white px-5 sm:px-10 py-8 text-dark2 shadow-md shadow-stone-200  border border-slate-200 flex flex-col">
			<h1 className="text-lg font-medium pb-8">{title}</h1>
			{children}
		</div>
	)
}

export default SettingsBox
