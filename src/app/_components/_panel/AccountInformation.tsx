'use client'
import SettingsBox from './SettingsBox'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import useAppStore from '@/app/stores/store'
import Button from '../_ui/Button'
import { User } from '@supabase/supabase-js'

function AccountInformation({ user, isGoogleAccount }: { user: User; isGoogleAccount: boolean }) {
	const openModal = useAppStore(state => state.openModal)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleOpenDeleteAvatarModal = () => {
		if (openModal === 'delete-account') {
			closeModal()
		} else {
			setOpenModal('delete-account')
		}
	}

	const formattedDate = format(new Date(user.created_at), 'd MMMM yyyy', { locale: pl })
	return (
		<SettingsBox title="Informacje o koncie">
			<div className="flex flex-col gap-5">
				<div className="text-dark2/80 text-sm md:text-base flex flex-col sm:flex-row flex-wrap gap-x-3 gap-y-1">
					<p>Właściciel:</p>
					<p className=" text-dark2 ">{user.user_metadata.name}</p>
				</div>
				<div className=" text-sm md:text-base text-dark2/80 flex flex-col sm:flex-row flex-wrap gap-x-3 gap-y-1 ">
					<p>Data utworzenia:</p> <p className="  text-dark2">{formattedDate}</p>
				</div>
				<div className="text-dark2/80 text-sm md:text-base flex flex-col sm:flex-row flex-wrap gap-x-3 gap-y-1">
					<p>Email:</p>
					<p className=" text-dark2 ">{user.email}</p>
				</div>
				<div className="text-dark2/80 text-sm md:text-base flex flex-col sm:flex-row flex-wrap gap-x-3 gap-y-1">
					<p>Konto Google:</p>
					<p className=" text-dark2 ">{isGoogleAccount ? 'Połączone' : 'Nie Połączone'}</p>
				</div>

				<div className="flex items-center justify-center">
					<Button
						variant="transparentDark"
						restClass="p-0.5 !text-red-600 hover:!text-red-400"
						onClick={handleOpenDeleteAvatarModal}>
						Usuń konto
					</Button>
				</div>
			</div>
		</SettingsBox>
	)
}

export default AccountInformation
