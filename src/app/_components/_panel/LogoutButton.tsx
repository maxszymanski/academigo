'use client'
import { IoLogOut } from 'react-icons/io5'
import NavigationLink from '../_ui/NavigationLink'
import { logout } from '@/app/_actions/auth'
import { useTransition } from 'react'
import LoadingPortal from '../_ui/LoadingPortal'

function LogoutButton() {
	const [isPending, startTransition] = useTransition()
	const handleLogout = async () => {
		startTransition(async () => {
			await logout()
		})
	}

	return (
		<>
			{isPending && <LoadingPortal />}
			<NavigationLink
				onClick={() => {
					handleLogout()
				}}
				panelNav
				restClass="hidden lg:flex">
				<IoLogOut className="mr-4 size-8 flex-shrink-0" /> <span className="">Wyloguj się</span>
			</NavigationLink>
		</>
	)
}

export default LogoutButton
