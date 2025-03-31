// import Image from 'next/image'

import DashboardStats from '@/app/_components/_panel/DashboardStats'
import PanelHello from '@/app/_components/_panel/PanelHello'
import QuickSecion from '@/app/_components/_panel/QuickSecion'
import RankSection from '@/app/_components/_panel/RankSection'
// import { createClient } from '@/app/utils/supabase/server'

async function AccountPage() {
    // const supabase = await createClient()
    // const { data } = await supabase.auth.getUser()

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
