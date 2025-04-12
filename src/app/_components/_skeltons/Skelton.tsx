function Skelton({ props }: { props?: string }) {
	return (
		<div
			className={`flex  flex-shrink-0 flex-col overflow-hidden  border  shadow-md shadow-stone-200 animate-shine bg-slate50 bg-gradient-stone bg-[length:200%_100%]  rounded-3xl ${props ? props : 'h-44 w-44 xl:h-48 xl:w-48'}`}></div>
	)
}

export default Skelton
