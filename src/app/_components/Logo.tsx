import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href="/" className="">
			<Image alt="logo" src="/logo-sm.png" height={35} width={190} />
		</Link>
	)
}

export default Logo
