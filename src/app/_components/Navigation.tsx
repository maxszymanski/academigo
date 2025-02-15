import Button from './Button'
import Logo from './Logo'
import MobileNav from './MobileNav'
import NavigationLink from './NavigationLink'

function Navigation() {
	return (
		<>
			<MobileNav />
			<nav className="hidden  xl:container xl:mx-auto py-6 px-4 lg:px-6 md:flex items-center justify-between gap-2">
				<Logo />
				<ul className="flex items-center  justify-between xl:gap-20 2xl:gap-24 gap-8">
					<div className="flex items-center lg:gap-6 xl:gap-10 gap-3">
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
