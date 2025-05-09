'use client'
import { ReactNode } from 'react'
import Coursetype from './Coursetype'

interface FilterProps {
	children: ReactNode
	secondChildren: ReactNode
	mobile?: boolean
}

function Filters({ children, mobile = false, secondChildren }: FilterProps) {
	return (
		<aside
			className={`${mobile ? 'relative flex max-h-[500px] md:px-4 px-3 py-6 lg:hidden ' : 'hidden min-w-72 lg:flex'} flex-col gap-8 overflow-y-auto text-nowrap sm:pr-4 scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300 lg:top-6 xl:min-w-[340px]`}>
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
		</aside>
	)
}

export default Filters
