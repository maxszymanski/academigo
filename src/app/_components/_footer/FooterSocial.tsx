import Image from 'next/image'
import Link from 'next/link'
import Logo from '../_ui/Logo'
import FbIcon from '@/assets/icon-fb.png'
import TwitterIcon from '@/assets/icon-twitter.png'
import YtIcon from '@/assets/icon-yt.png'

function FooterSocial() {
	return (
		<div className="flex flex-col items-center gap-4 md:items-start md:gap-12">
			<div className="w-fit">
				<Logo isMobile />
			</div>
			<p className="max-w-[300px] pl-2 text-center text-sm leading-5 md:max-w-[400px] md:text-left md:text-base lg:max-w-[500px]">
				Academigo to platforma edukacyjna, która pomaga w łatwym dostępie do najlepszych kursów online.
			</p>
			<div className="flex gap-1 pt-2">
				<Link href="www.facebook.pl" className="inline-flex p-2">
					<Image src={FbIcon} alt="ikona Facebook" width={36} height={36} />
				</Link>
				<Link href="www.facebook.pl" className="inline-flex p-2">
					<Image src={TwitterIcon} alt="ikona twitter" width={36} height={36} />
				</Link>
				<Link href="www.facebook.pl" className="inline-flex p-2">
					<Image src={YtIcon} alt="ikona Youtube" width={36} height={36} />
				</Link>
			</div>
		</div>
	)
}

export default FooterSocial
