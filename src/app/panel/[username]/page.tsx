// import { auth } from '@/app/_lib/auth'
// import Image from 'next/image'

import DashboardStats from '@/app/_components/_panel/DashboardStats'
import PanelHello from '@/app/_components/_panel/PanelHello'
import QuickSecion from '@/app/_components/_panel/QuickSecion'
import RankSection from '@/app/_components/_panel/RankSection'

async function AccountPage() {
    // const session = await auth()
    // console.log(session)

    return (
        <>
            <PanelHello />
            <DashboardStats />
            <section className="w-full lg:px-6">
                <RankSection />
                <QuickSecion />
            </section>
        </>
    )
}

export default AccountPage
