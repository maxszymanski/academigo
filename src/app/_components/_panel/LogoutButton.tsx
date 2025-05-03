'use client'
import { IoLogOut } from 'react-icons/io5'
import NavigationLink from '../_ui/NavigationLink'
import { logout } from '@/app/_actions/auth'
import { useTransition } from 'react'
import LoadingPortal from '../_ui/LoadingPortal'

function LogoutButton({ panelNav = true, restClass = 'hidden lg:flex' }: { panelNav?: boolean; restClass?: string }) {
	const [isPending, startTransition] = useTransition()
	const handleLogout = async () => {
		startTransition(async () => {
			await logout()
		})
	}

	return (
		<>
			{isPending && <LoadingPortal information="Wylogowywanie" />}
			<NavigationLink
				onClick={() => {
					handleLogout()
				}}
				panelNav={panelNav}
				restClass={restClass}>
				<IoLogOut
					className={`mr-4  ${panelNav ? 'size-6 lg:size-8 hover:!bg-white/10' : 'size-5 2xl:size-7  '} flex-shrink-0`}
				/>{' '}
				<span className="text-base xl:text-lg 2xl:text-xl">Wyloguj się</span>
			</NavigationLink>
		</>
	)
}

export default LogoutButton
