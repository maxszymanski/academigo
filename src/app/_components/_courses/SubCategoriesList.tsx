'use client'
import { useTransition } from 'react'
import Button from '../_ui/Button'
import { SubCat } from './SubCategories'
import { useRouter, useSearchParams } from 'next/navigation'
import LoadingPortal from '../_ui/LoadingPortal'

function SubCategoriesList({ subCategories }: { subCategories: SubCat[] }) {
    const [isPending, startTransition] = useTransition()
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentSubCategory = searchParams.get('subcategory')

    const handleCategoryClick = (slug: string) => {
        startTransition(() => {
            const params = new URLSearchParams(searchParams.toString())
            if (currentSubCategory === slug) {
                params.delete('subcategory')
            } else {
                params.set('subcategory', slug)
            }

            router.push(`/kursy?${params.toString()}`, { scroll: false })
        })
    }

    return (
        <div className="flex flex-col gap-0">
            {isPending && <LoadingPortal />}
            {subCategories.map((subCat) => (
                <Button
                    variant="category"
                    restClass="px-2 text-sm xl:text-base"
                    key={subCat.name}
                    isActive={currentSubCategory === subCat.subcategory_slug}
                    onClick={() => handleCategoryClick(subCat.subcategory_slug)}
                >
                    {subCat.name}
                </Button>
            ))}
        </div>
    )
}

export default SubCategoriesList
