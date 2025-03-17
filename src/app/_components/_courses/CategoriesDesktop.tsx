'use client'
import { CategoriesType, Category } from '@/app/_types/types'
import { useSearchParams, useRouter } from 'next/navigation'
import Button from '../_ui/Button'

function CategoriesDesktop({ categories }: CategoriesType) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentCategory = searchParams.get('category')

    const handleCategoryClick = (slug: string) => {
        router.push(`/kursy?category=${slug}`, { scroll: false })
    }

    return (
        <div className="mx-auto w-full max-w-5xl pt-10 2xl:max-w-6xl 2xl:pt-14">
            <div className="hidden w-full flex-wrap items-center justify-center gap-x-8 gap-y-8 lg:flex">
                {categories.map((category: Category) => (
                    <Button
                        variant="desktopCategory"
                        restClass="focus:border-primary"
                        key={category.name}
                        isActive={currentCategory === category.slug}
                        onClick={() => {
                            handleCategoryClick(category.slug)
                        }}
                    >
                        {category.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default CategoriesDesktop
