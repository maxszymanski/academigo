'use client'
import useAppStore from '../stores/store'
import Button from './Button'

import NavigationLink from './NavigationLink'

function NavigationList({ blackNav = false }: { blackNav?: boolean }) {
	const { isNavOpen } = useAppStore()

	return (
		<ul
			className={`${
				isNavOpen ? 'translate-x-0 ' : 'translate-x-full md:translate-x-0'
			} absolute flex items-center transition-transform duration-500  justify-evenly md:justify-end gap-12 xl:gap-20 2xl:gap-24 py-12  flex-col md:flex-row md:p-0 md:relative h-screen z-40 top-0 right-0   md:h-full overflow-y-auto md:overflow-y-hidden w-full ${
				blackNav ? 'bg-dark' : 'bg-white'
			}`}>
			<div className="flex md:flex-row flex-col md:items-center gap-4  lg:gap-6 xl:gap-10 md:gap-3 pt-4 md:pt-0">
				<NavigationLink href="/" restClass="md:hidden">
					Strona główna
				</NavigationLink>
				<NavigationLink href="/kursy">Kursy</NavigationLink>

				<NavigationLink href="/blog">Blog</NavigationLink>

				<NavigationLink href="/o-nas">O nas</NavigationLink>
				<NavigationLink href="/kontakt">Kontakt</NavigationLink>
			</div>
			<div className="flex flex-col md:flex-row  lg:gap-4 xl:gap-6 gap-5 ">
				<li>
					<Button href="/wspolpraca" restClass=" xl:min-w-[160px] ">
						Zostań współtwórcą
					</Button>
				</li>

				<li>
					<Button href="/panel" restClass=" xl:min-w-[160px]">
						Moje konto
					</Button>
				</li>
			</div>
		</ul>
	)
}

export default NavigationList
