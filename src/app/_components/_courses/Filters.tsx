'use client'
import { ReactNode } from 'react'
import Button from '../_ui/Button'
import Coursetype from './Coursetype'

interface FilterProps {
    children: ReactNode
    secondChildren: ReactNode
    mobile?: boolean
}

function Filters({ children, mobile = false, secondChildren }: FilterProps) {
    return (
        <aside
            className={`${mobile ? 'relative flex max-h-[500px] px-8 py-6 lg:hidden' : 'hidden min-w-72 lg:flex'} flex-col gap-8 overflow-y-auto text-nowrap pr-4 scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300 lg:top-6 xl:min-w-[340px]`}
        >
            <div className="text-xs text-stone400 xl:text-sm">
                <h4 className="mb-6 px-3 text-2xl font-bold">Podkategorie</h4>
                {children}
            </div>
            <div className="text-xs text-stone400 xl:text-sm">
                <h4 className="mb-6 px-3 text-2xl font-bold">Specjalizacje</h4>
                {secondChildren}
            </div>
            <div className="text-xs text-stone400 xl:text-sm">
                <h4 className="mb-6 px-3 text-2xl font-bold">Typ kursu</h4>
                <Coursetype />
            </div>

            <Button>Filtruj</Button>
        </aside>
    )
}

export default Filters
