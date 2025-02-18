import Logo from './Logo'
import MobileNav from './MobileNav'
import NavigationList from './NavigationList'

function Navigation() {
	return (
		<>
			<nav className="  w-full  md:relative  xl:container xl:mx-auto md:py-6  md:px-6 flex flex-col md:flex-row md:items-center   md:justify-between gap-2 fixed ">
				<MobileNav />
				<Logo />
				<NavigationList />
			</nav>
		</>
	)
}

export default Navigation
