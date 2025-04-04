import Image from 'next/image'
import Link from 'next/link'
import SmallLogo from '@/assets/logo-sm.png'

function Logo({ isMobile = false }: { isMobile?: boolean }) {
	return (
		<Link href="/" className={`mb-1 p-1.5 ${isMobile ? 'block' : 'hidden md:block'}`}>
			<Image
				alt="logo"
				src={SmallLogo}
				height={35}
				width={190}
				className="block w-[120px] lg:w-[190px]"
				priority
			/>
		</Link>
	)
}

export default Logo
