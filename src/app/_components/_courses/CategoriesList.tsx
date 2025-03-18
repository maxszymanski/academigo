import { useRef, useTransition } from 'react'
import Modal from '../_ui/Modal'
import useAppStore from '@/app/stores/store'
import { Category } from '@/app/_types/types'
import Button from '../_ui/Button'
import { useSearchParams, useRouter } from 'next/navigation'
import LoadingPortal from '../_ui/LoadingPortal'

function CategoriesList({ categories }: { categories: Category[] }) {
    const [isPending, startTransition] = useTransition()
    const modalRef = useRef<HTMLDivElement | null>(null)
    const closeModal = useAppStore((state) => state.closeModal)
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get('category')
    const router = useRouter()

    const handleCategoryClick = (slug: string) => {
        startTransition(() => {
            router.push(`/kursy?category=${slug}`, { scroll: false })
        })
    }

    return (
        <>
            {isPending && <LoadingPortal />}
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
                                isActiveClass="text-primary  bg-slate50"
                                restClass="px-10"
                                onClick={() => {
                                    handleCategoryClick(category.slug)
                                }}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default CategoriesList
