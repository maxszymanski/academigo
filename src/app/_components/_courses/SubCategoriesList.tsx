'use client'
import { useTransition } from 'react'
import Button from '../_ui/Button'
import { useRouter, useSearchParams } from 'next/navigation'
import LoadingPortal from '../_ui/LoadingPortal'
import { MdOutlineRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'
import { SubCat } from '@/app/_types/types'

function SubCategoriesList({ subCategories }: { subCategories: SubCat[] }) {
	const [isPending, startTransition] = useTransition()
	const searchParams = useSearchParams()
	const router = useRouter()
	const currentSubCategory = searchParams.get('subcategory')

	const handleCategoryClick = (slug: string, categorySlug: string) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())
			if (currentSubCategory === slug) {
				params.delete('subcategory')
				params.delete('specialization')
			} else {
				params.set('category', categorySlug)
				params.set('subcategory', slug)
				params.delete('specialization')
			}

			router.push(`/kursy?${params.toString()}`, { scroll: false })
		})
	}

	return (
		<>
			<div
				className={`'h-fit flex max-h-[337px] flex-col overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300`}>
				{isPending && <LoadingPortal />}
				{subCategories.map(subCat => (
					<Button
						variant="category"
						restClass="px-3 text-sm xl:text-base gap-4"
						key={subCat.name}
						isActive={currentSubCategory === subCat.subcategory_slug}
						isActiveClass="text-primary  bg-slate50 "
						onClick={() => handleCategoryClick(subCat.subcategory_slug, subCat.slug_category)}>
						<>
							{currentSubCategory === subCat.subcategory_slug ? (
								<MdRadioButtonChecked />
							) : (
								<MdOutlineRadioButtonUnchecked />
							)}{' '}
							{subCat.name}
						</>
					</Button>
				))}
			</div>
			{/* {subCategories.length > 7 && (
                <Button
                    variant="category"
                    restClass="px-3 text-sm xl:text-base !w-fit !text-primary mt-3"
                    onClick={setFullHeight}
                >
                    {fullHeight ? 'Zobacz mniej' : 'Zobacz więcej'}
                </Button>
            )} */}
		</>
	)
}

export default SubCategoriesList
