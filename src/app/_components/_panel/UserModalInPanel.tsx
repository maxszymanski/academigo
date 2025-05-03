'use client'
import useAppStore from '@/app/stores/store'
import AccountNavModal from '../_ui/AccountNavModal'

function UserModalInPanel({ userId }: { userId?: string }) {
	const openModal = useAppStore(state => state.openModal)

	return <>{openModal === 'account-nav' ? <AccountNavModal isUserPanel userId={userId} /> : null}</>
}

export default UserModalInPanel
