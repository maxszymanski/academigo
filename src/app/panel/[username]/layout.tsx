import PanelLogo from '@/app/_components/_ui/PanelLogo'
import Button from '@/app/_components/Button'
import NavigationLink from '@/app/_components/NavigationLink'
import { BiSolidNotepad } from 'react-icons/bi'
import { FaGraduationCap } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'

function layout() {
	return (
		<div className="flex flex-col-reverse h-screen">
			<nav className="bg-primary/90  flex items-center px-1 overflow-x-hidden overflow-y-auto">
				<div className="object-contain hidden">
					<PanelLogo />
				</div>
				<ul className="flex  gap-4  self-start w-full  ">
					<NavigationLink href="panel/max" panelNav>
						<MdDashboard className="mr-4 size-8 flex-shrink-0" /> <span className="hidden">Panel</span>
					</NavigationLink>
					<NavigationLink href="panel/a" panelNav>
						<FaGraduationCap className="mr-4 size-8 flex-shrink-0" />{' '}
						<span className="hidden">Moje kursy</span>
					</NavigationLink>

					<NavigationLink href="panel/b" panelNav>
						<BiSolidNotepad className="mr-4 size-8 flex-shrink-0" /> <span className="hidden">O mnie</span>
					</NavigationLink>
					<NavigationLink href="panel/x" panelNav>
						<IoMdSettings className="mr-4 size-8 flex-shrink-0" />
						<span className="hidden">Ustawienia</span>
					</NavigationLink>
				</ul>

				<Button variant="panel">
					{' '}
					<IoLogOut className="mr-4 size-8 flex-shrink-0" /> <span className="hidden">Wyloguj się</span>
				</Button>
			</nav>
			<div>
				<header>
					<p>header</p>
				</header>
				<main>
					<p>main</p>
				</main>
			</div>
		</div>
	)
}

export default layout
