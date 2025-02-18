import Image from 'next/image'

function Ellispe() {
	return (
		<div className="hidden lg:block h-full w-[1220px] absolute -left-[70%] xl:-left-[50%] 2xl:-left-[40%]  top-32 z-10">
			<Image src="/egg.jpg" height={860} width={1220} alt="elipsa w kształcie jajka" className="object-cover" />
		</div>
	)
}

export default Ellispe
