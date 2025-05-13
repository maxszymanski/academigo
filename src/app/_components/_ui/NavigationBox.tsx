import { getCurrentUser } from '@/app/_actions/auth'
import Navigation from './Navigation'

async function NavigationBox() {
	const user = await getCurrentUser()

	const isUser = !!user?.id
	const userAvatar = user?.avatar
	const userId = user?.id

	return <Navigation isUser={isUser} userAvatar={userAvatar} userId={userId} />
}

export default NavigationBox
