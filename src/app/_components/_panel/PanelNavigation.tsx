import { MdDashboard } from 'react-icons/md'
import PanelLogo from '../_ui/PanelLogo'
import NavigationLink from '../_ui/NavigationLink'
import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { RiGraduationCapFill } from 'react-icons/ri'
import LogoutButton from './LogoutButton'
import { FaPlus } from 'react-icons/fa6'

function PanelNavigation() {
	return (
		<nav className="flex items-center overflow-y-auto bg-primary/90 px-1 lg:m-2 lg:flex-col lg:rounded-3xl lg:px-6 lg:py-12 xl:my-4 xl:ml-4 2xl:px-10 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2">
			<div className="hidden object-contain lg:block">
				<PanelLogo />
			</div>
			<ul className="flex w-full items-center justify-around lg:flex-1 lg:flex-col lg:items-stretch lg:justify-start lg:gap-6 lg:py-8">
				<NavigationLink href="/konto" panelNav>
					<MdDashboard className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">Panel</span>
				</NavigationLink>
				<NavigationLink href="/konto/" panelNav>
					<RiGraduationCapFill className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">Moje kursy</span>
				</NavigationLink>
				<NavigationLink href="/konto/kurs/dodaj-kurs" panelNav>
					<FaPlus className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">Dodaj kurs</span>
				</NavigationLink>

				<NavigationLink href="/konto/o-mnie" panelNav>
					<FaUser className="size-6 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">O mnie</span>
				</NavigationLink>
				<NavigationLink href="/konto/ustawienia" panelNav>
					<IoMdSettings className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />
					<span className="hidden lg:block">Ustawienia</span>
				</NavigationLink>
			</ul>
			<LogoutButton />
		</nav>
	)
}

export default PanelNavigation
