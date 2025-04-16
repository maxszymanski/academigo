'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import Button from '../_ui/Button'
import LoadingPortal from '../_ui/LoadingPortal'

function SelectedFilters() {
	const [isPending, startTransition] = useTransition()
	const searchParams = useSearchParams()
	const router = useRouter()

	const handleReset = () => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())

			params.delete('search')
			params.delete('category')
			params.delete('subcategory')
			params.delete('specialization')
			params.delete('type')

			router.push(`/kursy?${params.toString()}`, { scroll: false })
		})
	}

	return (
		<>
			{isPending && <LoadingPortal />}
			<div className="text-xs text-stone400 xl:text-sm">
				<Button onClick={handleReset} restClass="w-3/4">
					Wyczyść filtry
				</Button>
			</div>
		</>
	)
}

export default SelectedFilters
