'use client'
import { useEffect, useState, useTransition } from 'react'
import Button from '../_ui/Button'
import LoadingPortal from '../_ui/LoadingPortal'
import { useSearchParams, useRouter } from 'next/navigation'
import { MdOutlineRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'
import useAppStore from '@/app/stores/store'

const sortVariants = [
	{ name: 'Najpopularniesze', slug: 'najpopularniejsze' },
	{ name: 'Najwyżej oceniane', slug: 'najwyzej-oceniane' },
	{ name: 'Najnowsze', slug: 'najnowsze' },
	{ name: 'Najstarsze', slug: 'najstarsze' },
]

function SortingList() {
	const [shouldClose, setShouldClose] = useState(false)
	const [isPending, startTransition] = useTransition()
	const searchParams = useSearchParams()
	const router = useRouter()
	const closeModal = useAppStore(state => state.closeModal)
	const currentSortBy = searchParams.get('sort')

	useEffect(() => {
		if (!isPending && shouldClose) {
			closeModal()
			setShouldClose(false)
		}
	}, [isPending, closeModal, shouldClose])

	const handleSortButtonClick = (sortType: string) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())

			params.set('sort', sortType)

			router.push(`/kursy?${params.toString()}`, {
				scroll: false,
			})
		})
		setShouldClose(true)
	}

	return (
		<div className="flex justify-center px-8 py-6 text-xs text-stone400 xl:text-sm">
			<div className={`flex h-fit flex-col overflow-hidden`}>
				{isPending && <LoadingPortal />}
				{sortVariants.map(variant => (
					<Button
						variant="category"
						restClass="px-3 text-sm xl:text-base lg:px-5 gap-4"
						key={variant.name}
						isActive={currentSortBy === variant.slug}
						isActiveClass="text-primary  bg-slate50"
						onClick={() => handleSortButtonClick(variant.slug)}>
						<>
							{currentSortBy === variant.slug ? (
								<MdRadioButtonChecked />
							) : (
								<MdOutlineRadioButtonUnchecked />
							)}{' '}
							{variant.name}
						</>
					</Button>
				))}
			</div>
		</div>
	)
}

export default SortingList
