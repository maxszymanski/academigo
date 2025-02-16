import Button from './Button'
import Logo from './Logo'
import MobileNav from './MobileNav'
import NavigationLink from './NavigationLink'

function Navigation() {
	return (
		<>
			<MobileNav />
			<nav className="absolute top-0 left-0 z-40  bg-white w-full h-full  md:relative  xl:container xl:mx-auto py-6 px-4 lg:px-6 flex flex-col md:flex-row items-center pt-24  md:pt-0  md:justify-between gap-2 ">
				<Logo />
				<ul className="flex items-center  justify-evenly md:justify-between xl:gap-20 2xl:gap-24 gap-8 flex-col md:flex-row md:p-0 ">
					<div className="flex md:flex-row flex-col md:items-center gap-8 lg:gap-6 xl:gap-10 md:gap-3">
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
