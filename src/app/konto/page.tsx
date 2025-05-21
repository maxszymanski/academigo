import DashboardStats from '@/app/_components/_panel/DashboardStats'

import PanelHello from '@/app/_components/_panel/PanelHello'
import QuickSecion from '@/app/_components/_panel/QuickSecion'
import RankSection from '@/app/_components/_panel/RankSection'
import { getCurrentUser } from '@/app/_actions/auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Panel studenta | Twoje konto w Academigo',
	description:
		'Zarządzaj swoim kontem na Academigo – sprawdzaj statystyki, przeglądaj ranking, zarządzaj zapisanymi kursami i odkrywaj nowe możliwości nauki online.',
	keywords:
		'panel studenta, konto użytkownika, statystyki użytkownika, ranking, zarządzanie kursami, academigo, edukacja online, profil użytkownika',
}

async function AccountPage() {
	const user = await getCurrentUser()

	return (
		<>
			<PanelHello gender={user?.gender} username={user?.username} />
			<DashboardStats user={user} />

			<section className="w-full lg:px-6">
				<RankSection user={user} />
				<QuickSecion />
			</section>
		</>
	)
}

export default AccountPage
