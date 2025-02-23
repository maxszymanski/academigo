import { auth } from '@/app/_lib/auth'
import Image from 'next/image'

async function AccountPage() {
	const session = await auth()
	console.log(session)
	return (
		<main className="min-h-screen w-full flex items-center justify-center bg-primary  text-white rounded-xl">
			<p>{session?.user?.name || 'Max'} </p>
			<Image
				src={session?.user?.image}
				alt="user image"
				height={48}
				width={48}
				className="rounded-full border-white/50 border"
			/>
		</main>
	)
}

export default AccountPage
