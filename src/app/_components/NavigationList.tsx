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
			} absolute flex items-center transition-transform duration-500  justify-evenly md:justify-end gap-12 xl:gap-20 2xl:gap-24 py-12  flex-col md:flex-row md:p-0 md:relative h-screen z-40  w-full  md:h-full overflow-y-auto md:overflow-y-hidden ${
				blackNav ? 'bg-dark' : 'bg-white'
			}`}>
			<div className="flex md:flex-row flex-col md:items-center gap-10  lg:gap-6 xl:gap-10 md:gap-3 pt-4 md:pt-0">
				<NavigationLink href="/" linkName="Strona główna" restClass="md:hidden" />
				<NavigationLink href="/kursy" linkName="Kursy" />

				<NavigationLink href="/blog" linkName="Blog" />

				<NavigationLink href="/o-nas" linkName="O nas" />
				<NavigationLink href="/kontakt" linkName="Kontakt" />
			</div>
			<div className="flex  items-center lg:gap-4 xl:gap-6 gap-3 ">
				<li>
					<Button href="/wspolpraca" restClass=" xl:min-w-[160px] ">
						Zostań współtwórcą
					</Button>
				</li>
				<li>
					<Button href="/konto/zaloguj-sie" restClass=" xl:min-w-[160px]">
						Zaloguj się
					</Button>
				</li>
			</div>
		</ul>
	)
}

export default NavigationList
