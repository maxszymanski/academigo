import { MdDashboard } from 'react-icons/md'
import PanelLogo from '../_ui/PanelLogo'
import NavigationLink from '../NavigationLink'
import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { RiGraduationCapFill } from 'react-icons/ri'
import Button from '../Button'
import { IoLogOut } from 'react-icons/io5'

function PanelNavigation() {
	return (
		<nav className="bg-primary/90  flex items-center lg:flex-col lg:py-12 px-1 lg:px-6 lg:rounded-3xl lg:ml-2 lg:my-2">
			<div className="object-contain hidden lg:block">
				<PanelLogo />
			</div>
			<ul className="flex lg:flex-col  w-full items-center justify-around  lg:items-stretch lg:flex-1 lg:justify-start lg:py-8 lg:gap-6">
				<NavigationLink href="/panel/max" panelNav>
					<MdDashboard className="lg:mr-4 size-7 lg:size-8 flex-shrink-0" />{' '}
					<span className="hidden lg:block">Panel</span>
				</NavigationLink>
				<NavigationLink href="/panel/a" panelNav>
					<RiGraduationCapFill className="lg:mr-4 size-7 lg:size-8 flex-shrink-0" />{' '}
					<span className="hidden lg:block">Moje kursy</span>
				</NavigationLink>

				<NavigationLink href="/panel/b" panelNav>
					<FaUser className="lg:mr-4 size-6 lg:size-8 flex-shrink-0" />{' '}
					<span className="hidden lg:block">O mnie</span>
				</NavigationLink>
				<NavigationLink href="/panel/x" panelNav>
					<IoMdSettings className="lg:mr-4 size-7 lg:size-8 flex-shrink-0" />
					<span className="hidden lg:block">Ustawienia</span>
				</NavigationLink>
			</ul>

			<Button variant="panel" restClass="hidden lg:flex">
				{' '}
				<IoLogOut className="mr-4 size-8 flex-shrink-0" /> <span className="">Wyloguj się</span>
			</Button>
		</nav>
	)
}

export default PanelNavigation
