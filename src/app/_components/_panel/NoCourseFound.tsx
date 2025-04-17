import Button from '../_ui/Button'

function NoCourseFound({ info }: { info: string }) {
	return (
		<div className="md:pt-8 md:text-xl text-dark2">
			<p className="pb-8 md:pb-16">{info}</p>
			<Button href="/kursy" restClass=" py-4 px-10 text-lg xl:text-lg xl:py-5  xl:px-12 md:text-lg lg:text-lg ">
				Znajdź kursy
			</Button>
		</div>
	)
}

export default NoCourseFound
