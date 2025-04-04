import Image from 'next/image'
import Logo from '@/assets/panel-logo.png'

function PanelLogo() {
	return (
		<Image
			height={128}
			width={128}
			alt="logo firmy academigo"
			src={Logo}
			priority
			className="w-28 h-28 md:w-32 md:h-32"
		/>
	)
}

export default PanelLogo
