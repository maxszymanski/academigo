'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import Button from '../_ui/Button'
import LoadingPortal from '../_ui/LoadingPortal'

import { IoClose } from 'react-icons/io5'

function SelectedFilters() {
	const [isPending, startTransition] = useTransition()
	const searchParams = useSearchParams()
	const router = useRouter()

	const search = searchParams.get('search')
	const category = searchParams.get('category')
	const subCategory = searchParams.get('subcategory')
	const specialization = searchParams.get('specialization')
	const type = searchParams.get('type')

	const isActiveFilter = category || subCategory || specialization || type

	function slugToTitle(slug: string): string {
		return slug
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	}

	const handleReset = (filter: string) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())

			params.delete('search')
			params.delete(filter)
			params.set('page', '1')
			router.push(`/kursy?${params.toString()}`, { scroll: false })
		})
	}
	const handleResetCategory = () => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())

			params.delete('search')
			params.delete('category')
			params.delete('subcategory')
			params.delete('specialization')
			params.set('page', '1')

			router.push(`/kursy?${params.toString()}`, { scroll: false })
		})
	}
	const handleResetSubCategory = () => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())

			params.delete('search')
			params.delete('subcategory')
			params.delete('specialization')
			params.set('page', '1')

			router.push(`/kursy?${params.toString()}`, { scroll: false })
		})
	}
	const handleResetSearch = () => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())

			params.delete('search')
			params.set('page', '1')

			router.push(`/kursy?${params.toString()}`, { scroll: false })
		})
	}

	return (
		<>
			{isPending && <LoadingPortal />}
			<div className="flex w-full justify-center flex-col items-center pt-5 pb-8 lg:pt-8 2xl:pt-12 2xl:pb-10">
				<div className="flex flex-col items-center">
					{search ? (
						<p className="text-dark2/85 text-sm text-center pb-3 flex flex-wrap items-center justify-center gap-3">
							<span>Wyniki wyszukiwania:</span>{' '}
							<span className="font-medium first-letter:uppercase">{search}</span>
						</p>
					) : (
						<p className="text-dark2/85 text-center text-sm ">
							{isActiveFilter ? 'Aktywne filtry' : 'Brak wybranych filtrów'}
						</p>
					)}

					{isActiveFilter && (
						<div className="flex gap-4 items-center flex-wrap justify-center  pt-4">
							{category && (
								<Button
									onClick={handleResetCategory}
									restClass="text-xs !py-1.5 !px-3 !font-normal hover:!border-red-400 hover:!text-red-400 xl:!text-sm"
									variant="submit"
									title="Usuń parametr">
									{slugToTitle(category)} <IoClose className="ml-1 mt-0.5 " />
								</Button>
							)}
							{subCategory && (
								<Button
									onClick={handleResetSubCategory}
									restClass="text-xs !py-1.5 !px-3 !font-normal hover:!border-red-400 hover:!text-red-400 xl:!text-sm"
									variant="submit"
									title="Usuń parametr">
									{slugToTitle(subCategory)} <IoClose className="ml-1 mt-0.5 " />
								</Button>
							)}
							{specialization && (
								<Button
									onClick={() => handleReset('specialization')}
									restClass="text-xs !py-1.5 !px-3 !font-normal hover:!border-red-400 hover:!text-red-400 xl:!text-sm"
									variant="submit"
									title="Usuń parametr">
									{slugToTitle(specialization)} <IoClose className="ml-1 mt-0.5 " />
								</Button>
							)}
							{type && (
								<Button
									onClick={() => handleReset('type')}
									restClass="text-xs !py-1.5 !px-3 !font-normal hover:!border-red-400 hover:!text-red-400 xl:!text-sm"
									variant="submit"
									title="Usuń parametr">
									{type == 'platny' ? 'Płatny' : 'Darmowy'} <IoClose className="ml-1 mt-0.5 " />
								</Button>
							)}
						</div>
					)}
					{search && (
						<Button
							onClick={handleResetSearch}
							restClass="text-sm !py-2 !px-6 !font-normal "
							variant="submit">
							Resetuj
						</Button>
					)}
				</div>
			</div>
		</>
	)
}

export default SelectedFilters
