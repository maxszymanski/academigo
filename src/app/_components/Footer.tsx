import FooterNav from './FooterNav'
import FooterContact from './FooterContact'
import FooterSocial from './FooterSocial'
import Link from 'next/link'

function Footer() {
	return (
		<footer className=" bg-[#212121] px-6  ">
			<div className="container mx-auto ">
				<div className="flex flex-col md:flex-row   justify-center gap-10 md:justify-between lg:pt-16  pt-8 pb-6 text-white/80 ">
					<FooterSocial />
					<div className="flex flex-wrap w-full justify-center gap-y-10 gap-x-20 md:gap-x-10 lg:justify-evenly">
						<FooterNav />
						<FooterContact />
					</div>
				</div>
				<div className="text-white text-xs py-4 border-t border-white/20 flex justify-center items-center gap-6">
					<Link
						href="/polityka-prywatnosci"
						className="hover:text-white duration-300 transition-colors text-white/80">
						Polityka prywatności
					</Link>
					<p className="">Wszystkie prawa zastrzeżone | ACADEMIGO 2025</p>
					<Link href="/regulamin" className="hover:text-white duration-300 transition-colors text-white/80">
						Regulamin seriwsu
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
