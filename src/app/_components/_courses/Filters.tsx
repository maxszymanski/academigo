'use client'
import { ReactNode } from 'react'
import Button from '../_ui/Button'

function Filters({
    children,
    mobile = false,
}: {
    children: ReactNode
    mobile?: boolean
}) {
    return (
        <aside
            className={`${mobile ? 'relative flex max-h-[500px] px-8 py-6 lg:hidden' : 'sticky hidden max-h-screen min-w-72 lg:flex'} flex-col gap-8 overflow-y-auto text-nowrap lg:top-6 xl:min-w-[340px]`}
        >
            <div className="text-xs text-stone400 xl:text-sm">
                <h4 className="mb-6 px-3 text-2xl font-bold">Podkategorie</h4>
                {children}
            </div>
            <div className="text-xs text-stone400">
                <h4 className="mb-4 text-lg font-bold">Typ kursu</h4>
                <div>
                    <p className="mb-3">Płatne</p>
                    <p>Darmowe</p>
                </div>
            </div>

            <Button>Filtruj</Button>
        </aside>
    )
}

export default Filters
