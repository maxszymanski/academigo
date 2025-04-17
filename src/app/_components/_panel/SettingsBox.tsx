function SettingsBox({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full max-w-md flex-shrink-0 rounded-lg bg-white px-5 sm:px-10 py-8 text-dark2 shadow-md shadow-stone-200  border border-slate-200">
			<h1 className="text-lg font-medium pb-8">Dane osobowe</h1>
			{children}
		</div>
	)
}

export default SettingsBox
