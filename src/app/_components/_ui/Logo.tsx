import Image from 'next/image'
import Link from 'next/link'

function Logo({ isMobile = false }: { isMobile?: boolean }) {
    return (
        <Link
            href="/"
            className={`mb-1 p-1.5 ${isMobile ? 'block' : 'hidden md:block'}`}
        >
            <Image
                alt="logo"
                src="/logo-sm.png"
                height={35}
                width={190}
                className="block w-[120px] lg:w-[190px]"
                priority
            />
        </Link>
    )
}

export default Logo
