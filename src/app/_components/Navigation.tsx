import Button from './Button'
import Logo from './Logo'
import NavigationLink from './NavigationLink'

function Navigation() {
	return (
		<nav className="xl:container xl:mx-auto py-6 px-6 flex items-center justify-between">
			<Logo />
			<ul className="flex items-center  justify-between gap-44">
				<div className="flex items-center gap-10">
					<NavigationLink href="/" linkName="Strona Główna" />

					<NavigationLink href="/kursy" linkName="Kursy" />

					<NavigationLink href="/nlog" linkName="Blog" />

					<NavigationLink href="/o-nas" linkName="O nas" />
					<NavigationLink href="/kontakt" linkName="Kontakt" />
				</div>
				<div className="flex items-center gap-6">
					<li>
						<Button href="/wspolpraca" text="Zostań współtwórcą" restClass=" min-w-[160px]" />
					</li>
					<li>
						<Button href="/login" text="Zaloguj się" restClass=" min-w-[160px]" />
					</li>
				</div>
			</ul>
		</nav>
	)
}

export default Navigation
