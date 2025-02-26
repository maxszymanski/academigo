import FooterNav from './FooterNav'
import FooterContact from './FooterContact'
import FooterSocial from './FooterSocial'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="bg-[#212121] px-6">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center gap-10 pb-6 pt-8 text-white/80 md:flex-row md:justify-between lg:pt-16">
                    <FooterSocial />
                    <div className="flex w-full flex-wrap justify-center gap-x-20 gap-y-10 md:gap-x-10 lg:justify-evenly">
                        <FooterNav />
                        <FooterContact />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-6 border-t border-white/20 py-4 text-center text-xs text-white md:gap-10 lg:gap-16">
                    <Link
                        href="/polityka-prywatnosci"
                        className="text-white/80 transition-colors duration-300 hover:text-white"
                    >
                        Polityka prywatności
                    </Link>
                    <p className="">
                        Wszystkie prawa zastrzeżone |{' '}
                        <span className="text-nowrap uppercase">
                            academigo 2025
                        </span>
                    </p>
                    <Link
                        href="/regulamin"
                        className="text-white/80 transition-colors duration-300 hover:text-white"
                    >
                        Regulamin seriwsu
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
