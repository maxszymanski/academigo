function Spinner({ restClass = '' }: { restClass?: string }) {
	return (
		<span
			className={`h-5 w-5 animate-spin rounded-full border-4 border-gray-300 border-t-primary ${restClass}`}></span>
	)
}

export default Spinner
