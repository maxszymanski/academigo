'use client'
import { useTransition } from 'react'
import Button from '../_ui/Button'
import { useRouter, useSearchParams } from 'next/navigation'
import LoadingPortal from '../_ui/LoadingPortal'
import { SpecializationType } from './Specialization'
import { MdOutlineRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'

function SpecializationsList({ specializations }: { specializations: SpecializationType[] }) {
	const [isPending, startTransition] = useTransition()
	const searchParams = useSearchParams()
	const router = useRouter()
	const currentSpecialization = searchParams.get('specialization')

	const handleCategoryClick = (slug: string, subCategorySlug: string, categorySlug: string) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString())
			params.delete('search')
			if (currentSpecialization === slug) {
				params.delete('specialization')
			} else {
				params.set('category', categorySlug)
				params.set('subcategory', subCategorySlug)
				params.set('specialization', slug)
			}
			params.set('page', '1')

			router.push(`/kursy?${params.toString()}`, { scroll: false })
		})
	}

	return (
		<>
			<div
				className={`flex h-fit max-h-[478px] flex-col overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300`}>
				{isPending && <LoadingPortal />}
				{specializations.map(spec => (
					<Button
						variant="category"
						restClass="px-3 text-sm xl:text-base gap-0"
						key={spec.name}
						isActive={currentSpecialization === spec.spec_slug}
						isActiveClass="text-primary  bg-slate50"
						onClick={() => handleCategoryClick(spec.spec_slug, spec.slug_sub_category, spec.slug_category)}>
						<>
							{currentSpecialization === spec.spec_slug ? (
								<MdRadioButtonChecked className="flex-shrink-0 mr-2 md:mr-3" />
							) : (
								<MdOutlineRadioButtonUnchecked className="flex-shrink-0 mr-2 md:mr-3" />
							)}{' '}
							{spec.name}{' '}
							<span className=" text-dark2/85 text-xs md:text-sm block ml-auto min-w-[25px] md:min-w-[30px]">
								( {spec.courseCount || 0} )
							</span>
						</>
					</Button>
				))}
			</div>
		</>
	)
}

export default SpecializationsList
