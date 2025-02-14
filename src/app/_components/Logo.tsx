import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href="/">
			<Image alt="logo" src="/logo-sm.png" height={32} width={132} />
		</Link>
	)
}

export default Logo
