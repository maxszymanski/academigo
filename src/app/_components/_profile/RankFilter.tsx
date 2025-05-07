'use client'
import { useRouter } from 'next/navigation'
import Button from '../_ui/Button'
import { useTransition } from 'react'
import LoadingPortal from '../_ui/LoadingPortal'

function RankFilter({ filter }: { filter?: string }) {
	const [isPending, startTransition] = useTransition()
	const router = useRouter()

	const handleSetSearchParams = (filter: string) => {
		startTransition(() => {
			router.push(`/ranking?filter=${filter}`)
		})
	}

	return (
		<>
			{isPending && <LoadingPortal information="Ładowanie rankingu" />}
			<div className="flex flex-wrap gap-4 pt-8 md:gap-12 justify-center xl:pt-12">
				<Button
					onClick={() => handleSetSearchParams('kursy')}
					variant="submit"
					restClass="!text-sm px-8 xl:!text-base xl:px-12"
					isActive={filter === 'kursy'}
					isActiveClass="bg-white !border-primary">
					Ilość kursów
				</Button>
				<Button
					onClick={() => handleSetSearchParams('punkty')}
					variant="submit"
					restClass="!text-sm px-8 xl:!text-base xl:px-12"
					isActive={filter === 'punkty'}
					isActiveClass="bg-white !border-primary">
					Ilość punktów
				</Button>
			</div>
		</>
	)
}

export default RankFilter
