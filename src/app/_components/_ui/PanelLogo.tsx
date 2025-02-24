import Image from 'next/image'

function PanelLogo() {
	return (
		<Image
			height={128}
			width={128}
			alt="logo firmy academigo"
			src="/panel-logo.png"
			priority
			className="w-28 h-28 md:w-32 md:h-32"
		/>
	)
}

export default PanelLogo
