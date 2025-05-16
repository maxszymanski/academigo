'use client'
import { useEffect, useRef, useState, useTransition } from 'react'
import Modal from '../_ui/Modal'
import useAppStore from '@/app/stores/store'
import { Category } from '@/app/_types/types'
import Button from '../_ui/Button'
import { useSearchParams, useRouter } from 'next/navigation'
import LoadingPortal from '../_ui/LoadingPortal'
import { MdOutlineRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'

function CategoriesList({ categories }: { categories: Category[] }) {
	const [isPending, startTransition] = useTransition()
	const modalRef = useRef<HTMLDivElement | null>(null)
	const closeModal = useAppStore(state => state.closeModal)
	const searchParams = useSearchParams()
	const currentCategory = searchParams.get('category')
	const router = useRouter()

	const [shouldClose, setShouldClose] = useState(false)
	useEffect(() => {
		if (!isPending && shouldClose) {
			closeModal()
			setShouldClose(false)
		}
	}, [isPending, closeModal, shouldClose])

	const handleCategoryClick = (slug: string) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())
			params.delete('search')
			if (currentCategory === slug) {
				params.delete('category')
				params.set('page', '1')
				router.push(`/kursy?page=1`, {
					scroll: false,
				})
			} else {
				params.set('category', slug)
				params.set('page', '1')
				router.push(`/kursy?category=${slug}&page=1`, { scroll: false })
			}
		})
		setShouldClose(true)
	}

	return (
		<>
			{isPending && <LoadingPortal />}
			<Modal
				position="left-0 top-[110%]"
				modalRef={modalRef}
				closeModal={closeModal}
				buttonId="categories-button">
				<div className="flex h-full w-full flex-col  py-6 text-sm text-dark2">
					<h4 className="mb-6 px-3 text-2xl font-bold text-stone400">Kategorie</h4>
					<div>
						{categories.map((category: Category) => (
							<Button
								variant="category"
								key={category.name}
								isActive={currentCategory === category.slug}
								isActiveClass="text-primary bg-slate50"
								restClass="px-10 text-sm gap-2 md:gap-3"
								onClick={() => {
									handleCategoryClick(category.slug)
								}}>
								<>
									{currentCategory === category.slug ? (
										<MdRadioButtonChecked className="flex-shrink-0 " />
									) : (
										<MdOutlineRadioButtonUnchecked className="flex-shrink-0 " />
									)}{' '}
									{category.name}{' '}
									<span className=" text-dark2/85 text-xs md:text-sm block ml-auto min-w-[25px] md:min-w-[30px]">
										( {category.courseCount || 0} )
									</span>
								</>
							</Button>
						))}
					</div>
				</div>
			</Modal>
		</>
	)
}

export default CategoriesList
