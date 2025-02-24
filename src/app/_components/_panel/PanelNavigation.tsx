import { MdDashboard } from 'react-icons/md'
import PanelLogo from '../_ui/PanelLogo'
import NavigationLink from '../NavigationLink'
import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { RiGraduationCapFill } from 'react-icons/ri'

function PanelNavigation() {
	return (
		<nav className="bg-primary/90  flex items-center px-1 ">
			<div className="object-contain hidden">
				<PanelLogo />
			</div>
			<ul className="flex   w-full items-center justify-around  ">
				<NavigationLink href="/panel/max" panelNav>
					<MdDashboard className="xl:mr-4 size-7 flex-shrink-0" /> <span className="hidden">Panel</span>
				</NavigationLink>
				<NavigationLink href="/panel/a" panelNav>
					<RiGraduationCapFill className="xl:mr-4 size-7 flex-shrink-0" />{' '}
					<span className="hidden">Moje kursy</span>
				</NavigationLink>

				<NavigationLink href="/panel/b" panelNav>
					<FaUser className="xl:mr-4 size-6 flex-shrink-0" /> <span className="hidden">O mnie</span>
				</NavigationLink>
				<NavigationLink href="/panel/x" panelNav>
					<IoMdSettings className="xl:mr-4 size-7 flex-shrink-0" />
					<span className="hidden">Ustawienia</span>
				</NavigationLink>
			</ul>

			{/* <Button variant="panel">
        {' '}
        <IoLogOut className="mr-4 size-8 flex-shrink-0" /> <span className="hidden">Wyloguj się</span>
    </Button> */}
		</nav>
	)
}

export default PanelNavigation
