'use client'
import Image from 'next/image'
import DefaultUser from '@/assets/default-user.webp'
import useAppStore from '@/app/stores/store'

function UserNavButton({ avatar }: { avatar?: string | null }) {
	const openModal = useAppStore(state => state.openModal)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleOpenModal = () => {
		{
			if (openModal === 'account-nav') {
				closeModal()
			} else {
				setOpenModal('account-nav')
			}
		}
	}

	return (
		<button
			className="hover:border-primary focus:border-primary border border-transparent  tranistion-color duration-300 block h-[42px] w-[42px] xl:h-12 xl:w-12 rounded-full relative overflow-hidden 2xl:h-14 2xl:w-14"
			title="Wyświetl panel użytkownika"
			aria-label="Wyświetl panel użytkownika"
			onClick={handleOpenModal}
			id="account-button">
			<Image
				priority
				src={avatar ? avatar : DefaultUser}
				fill
				className={` aspect-square  object-cover pointer-events-none`}
				alt="zdjęcie użytkownika"
			/>
		</button>
	)
}

export default UserNavButton
