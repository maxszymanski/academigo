import useAppStore from '../stores/store'
import Button from './Button'
import Logo from './Logo'
import MobileNav from './MobileNav'
import NavigationLink from './NavigationLink'

function Navigation() {
	return (
		<>
			<nav className="absolute top-0 left-0 z-30  bg-white w-full h-screen  md:relative  xl:container xl:mx-auto md:py-6 px-4 lg:px-6 flex flex-col md:flex-row md:items-center    md:justify-between gap-2 overflow-x-auto">
				<MobileNav />
				<Logo />
				<ul className="flex items-center flex-1 justify-evenly md:justify-between gap-12 xl:gap-20 2xl:gap-24 py-12  flex-col md:flex-row md:p-0 relative z-50">
					<div className="flex md:flex-row flex-col md:items-center gap-14 lg:gap-6 xl:gap-10 md:gap-3">
						<NavigationLink href="/kursy" linkName="Kursy" />

						<NavigationLink href="/blog" linkName="Blog" />

						<NavigationLink href="/o-nas" linkName="O nas" />
						<NavigationLink href="/kontakt" linkName="Kontakt" />
					</div>
					<div className="flex items-center lg:gap-4 xl:gap-6 gap-3">
						<li>
							<Button href="/wspolpraca" restClass=" xl:min-w-[160px]">
								Zostań współtwórcą
							</Button>
						</li>
						<li>
							<Button href="/login" restClass=" xl:min-w-[160px]">
								Zaloguj się
							</Button>
						</li>
					</div>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
