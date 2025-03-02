import { useRef } from 'react'
import Modal from '../_ui/Modal'
import useAppStore from '@/app/stores/store'
import { CategoriesType, Category } from '@/app/_types/types'
import Button from '../_ui/Button'
import { useSearchParams, useRouter } from 'next/navigation'

function CategoriesList({ categories }: CategoriesType) {
    const modalRef = useRef(null)
    const closeModal = useAppStore((state) => state.closeModal)
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentCategory = searchParams.get('category')

    const handleCategoryClick = (slug: string) => {
        router.push(`/kursy?category=${slug}`, { scroll: false })
    }

    return (
        <Modal
            position="left-0 top-[110%]"
            modalRef={modalRef}
            closeModal={closeModal}
            buttonId="categories-button"
        >
            <div className="flex h-full w-full flex-col items-center py-6 text-sm text-dark2">
                <div>
                    {categories.map((category: Category) => (
                        <Button
                            variant="category"
                            key={category.name}
                            isActive={currentCategory === category.slug}
                            onClick={() => handleCategoryClick(category.slug)}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>
        </Modal>
    )
}

export default CategoriesList
