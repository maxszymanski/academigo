import Button from '../_ui/Button'

import { FaArrowLeftLong } from 'react-icons/fa6'
import { differenceInYears } from 'date-fns'

import { getCurrentUser } from '@/app/_actions/auth'
import UserNavButton from '../_ui/UserNavButton'
import UserModalInPanel from './UserModalInPanel'

async function PanelHeader() {
	const user = await getCurrentUser()
	const years = user.created_at ? differenceInYears(new Date(), new Date(user.created_at)) : 0
	const displayYear = years < 1 ? '1 rok' : `${years + 1} rok`

	return (
		<header className="flex w-full items-center justify-between py-4 pl-4 pr-6 text-dark lg:px-6 xl:mx-auto xl:max-w-[1440px]">
			<div className="relative flex items-center gap-3">
				<UserNavButton avatar={user.avatar} />
				<div className="text-sm">
					<p className="font-medium text-primary text-base">{user.username}</p>
					<p className="text-dark/50">{displayYear}</p>
				</div>
				<UserModalInPanel userId={user?.id} />
			</div>

			<Button href="/kursy" restClass="rounded-xl">
				<FaArrowLeftLong className="mr-3 size-4" /> Kursy
			</Button>
		</header>
	)
}

export default PanelHeader
