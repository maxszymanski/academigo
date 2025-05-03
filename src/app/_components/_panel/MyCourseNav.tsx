// 'use client'
// import { usePathname } from 'next/navigation'
import NavigationLink from '../_ui/NavigationLink'
import { BiSolidBookmark, BiSolidBookAdd, BiSolidBookHeart, BiSolidStar } from 'react-icons/bi'

function MyCourseNav() {
	return (
		<nav className="w-full overflow-x-auto scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2">
			<ul className="flex items-center lg:justify-center justify-evenly gap-2 lg:gap-12 w-full  pb-4 ">
				<NavigationLink
					href="/konto/moje-kursy/dodane"
					restClass="text-sm focus:!text-slate-500"
					activeClass="text-slate-500">
					<BiSolidBookAdd className="size-5 lg:size-6 mr-1 lg:mr-2 " /> <span>Dodane</span>
				</NavigationLink>
				<NavigationLink
					href="/konto/moje-kursy/polubione"
					restClass="text-sm focus:!text-slate-500"
					activeClass="text-slate-500">
					<BiSolidBookHeart className="size-5 lg:size-6 mr-1 lg:mr-2 " /> <span>Polubione</span>
				</NavigationLink>
				<NavigationLink
					href="/konto/moje-kursy/zapisane"
					restClass="text-sm focus:!text-slate-500"
					activeClass="text-slate-500">
					<BiSolidBookmark className="size-5 lg:size-6 mr-1 lg:mr-2 " /> <span>Zapisane</span>
				</NavigationLink>
				<NavigationLink
					href="/konto/moje-kursy/ocenione"
					restClass="text-sm focus:!text-slate-500"
					activeClass="text-slate-500">
					<BiSolidStar className="size-5 lg:size-6 mr-1 lg:mr-2 " /> <span>Ocenione</span>
				</NavigationLink>
			</ul>
		</nav>
	)
}

export default MyCourseNav
