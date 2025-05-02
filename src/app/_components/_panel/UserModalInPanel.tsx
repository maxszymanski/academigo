'use client'
import useAppStore from '@/app/stores/store'
import AccountNavModal from '../_ui/AccountNavModal'

function UserModalInPanel() {
	const openModal = useAppStore(state => state.openModal)

	return <>{openModal === 'account-nav' ? <AccountNavModal isUserPanel /> : null}</>
}

export default UserModalInPanel
