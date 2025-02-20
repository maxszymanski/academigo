import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'

function FooterSocial() {
	return (
		<div className="flex flex-col gap-4 items-center md:items-start md:gap-12">
			<div className="w-fit ">
				<Logo isMobile />
			</div>
			<p className="text-sm leading-5 pl-2 text-center max-w-[300px]  md:text-left md:max-w-[400px] md:text-base lg:max-w-[500px]">
				Academigo to platforma edukacyjna, która pomaga w łatwym dostępie do najlepszych kursów online.
			</p>
			<div className="flex pt-2 gap-1">
				<Link href="www.facebook.pl" className="p-2 inline-flex">
					<Image src="/icon-fb.png" alt="ikona Facebook" width={36} height={36} />
				</Link>
				<Link href="www.facebook.pl" className="p-2 inline-flex">
					<Image src="/icon-twitter.png" alt="ikona twitter" width={36} height={36} />
				</Link>
				<Link href="www.facebook.pl" className="p-2 inline-flex">
					<Image src="/icon-yt.png" alt="ikona Youtube" width={36} height={36} />
				</Link>
			</div>
		</div>
	)
}

export default FooterSocial
