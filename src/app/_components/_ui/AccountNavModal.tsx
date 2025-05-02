'use client'
import { useRef } from 'react'
import Modal from './Modal'
import useAppStore from '@/app/stores/store'
import NavigationLink from './NavigationLink'
import { MdDashboard } from 'react-icons/md'
import { RiGraduationCapFill } from 'react-icons/ri'
import { FaPlus, FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import LogoutButton from '../_panel/LogoutButton'

function AccountNavModal({ isUserPanel = false }: { isUserPanel?: boolean }) {
	const modalRef = useRef<HTMLDivElement | null>(null)
	const closeModal = useAppStore(state => state.closeModal)
	const openModal = useAppStore(state => state.openModal)

	if (openModal != 'account-nav') return null

	return (
		<Modal
			position={`${isUserPanel ? 'top-[120%] left-0' : 'right-4 top-[110%] md:right-0 md:top-[120%]'} `}
			modalRef={modalRef}
			closeModal={closeModal}
			buttonId="account-button"
			userNav>
			<div className="h-full flex-col  py-6  px-4 flex w-full items-center   ">
				<ul className="flex w-full  justify-around flex-col gap-1.5 md:gap-3 pb-10 ">
					<NavigationLink href="/konto" restClass="hover:!bg-slate-100 min-w-[200px] !px-8 ">
						<div className="flex items-center" onClick={closeModal}>
							<MdDashboard className="size-7 flex-shrink-0 mr-4 md:size-8" /> <span>Panel</span>
						</div>
					</NavigationLink>
					<NavigationLink href="/konto/moje-kursy/dodane" restClass="hover:!bg-slate-100 min-w-[200px] !px-8">
						<div className="flex items-center" onClick={closeModal}>
							<RiGraduationCapFill className="size-7 flex-shrink-0 mr-4 md:size-8" />{' '}
							<span>Moje kursy</span>
						</div>
					</NavigationLink>
					<NavigationLink href="/konto/dodaj-kurs" restClass="hover:!bg-slate-100 min-w-[200px] !px-8">
						<div className="flex items-center" onClick={closeModal}>
							<FaPlus className="size-7 flex-shrink-0 mr-4 md:size-8" /> <span>Dodaj kurs</span>
						</div>
					</NavigationLink>

					<NavigationLink href="/konto/o-mnie" restClass="hover:!bg-slate-100 min-w-[200px] !px-8">
						<div className="flex items-center" onClick={closeModal}>
							<FaUser className="size-6 flex-shrink-0 mr-4 md:size-8" /> <span>O mnie</span>
						</div>
					</NavigationLink>
					<NavigationLink href="/konto/ustawienia" restClass="hover:!bg-slate-100 min-w-[200px] !px-8">
						<IoMdSettings className="size-7 flex-shrink-0 mr-4 md:size-8" />
						<div className="flex items-center" onClick={closeModal}>
							<span>Ustawienia</span>
						</div>
					</NavigationLink>
				</ul>
				<LogoutButton panelNav={false} restClass="hover:!bg-slate-100 min-w-[200px] !px-8" />
			</div>
		</Modal>
	)
}

export default AccountNavModal
