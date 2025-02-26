import { MdDashboard } from 'react-icons/md'
import PanelLogo from '../_ui/PanelLogo'
import NavigationLink from '../_ui/NavigationLink'
import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { RiGraduationCapFill } from 'react-icons/ri'
import Button from '../_ui/Button'
import { IoLogOut } from 'react-icons/io5'

function PanelNavigation() {
    return (
        <nav className="flex items-center bg-primary/90 px-1 lg:m-2 lg:flex-col lg:rounded-3xl lg:px-6 lg:py-12 xl:my-4 xl:ml-4 2xl:px-10">
            <div className="hidden object-contain lg:block">
                <PanelLogo />
            </div>
            <ul className="flex w-full items-center justify-around lg:flex-1 lg:flex-col lg:items-stretch lg:justify-start lg:gap-6 lg:py-8">
                <NavigationLink href="/panel/max" panelNav>
                    <MdDashboard className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
                    <span className="hidden lg:block">Panel</span>
                </NavigationLink>
                <NavigationLink href="/panel/a" panelNav>
                    <RiGraduationCapFill className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
                    <span className="hidden lg:block">Moje kursy</span>
                </NavigationLink>

                <NavigationLink href="/panel/b" panelNav>
                    <FaUser className="size-6 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
                    <span className="hidden lg:block">O mnie</span>
                </NavigationLink>
                <NavigationLink href="/panel/x" panelNav>
                    <IoMdSettings className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />
                    <span className="hidden lg:block">Ustawienia</span>
                </NavigationLink>
            </ul>

            <Button variant="panel" restClass="hidden lg:flex">
                {' '}
                <IoLogOut className="mr-4 size-8 flex-shrink-0" />{' '}
                <span className="">Wyloguj się</span>
            </Button>
        </nav>
    )
}

export default PanelNavigation
