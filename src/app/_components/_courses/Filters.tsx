'use client'
import { ReactNode } from 'react'
import Button from '../_ui/Button'

function Filters({ children }: { children: ReactNode }) {
    return (
        <aside className="sticky top-6 hidden min-w-64 max-w-fit flex-col gap-8 overflow-y-auto text-nowrap lg:flex">
            <div className="text-xs text-stone400 xl:text-sm">
                <h4 className="mb-6 text-center text-2xl font-bold">
                    Podkategorie
                </h4>
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
