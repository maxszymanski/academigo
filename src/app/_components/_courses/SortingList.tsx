'use client'
import { useTransition } from 'react'
import Button from '../_ui/Button'
import LoadingPortal from '../_ui/LoadingPortal'
import { useSearchParams, useRouter } from 'next/navigation'

const sortVariants = [
    { name: 'Najpopularniesze', slug: 'najpopularniejsze' },
    { name: 'Najwyżej oceniane', slug: 'najwyzej-oceniane' },
    { name: 'Najnowsze', slug: 'najnowsze' },
    { name: 'Najstarsze', slug: 'najstarsze' },
]

function SortingList() {
    // const [shouldCloseModal, setShouldCloseModal] = useState(false)
    const [isPending, startTransition] = useTransition()
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentSortBy = searchParams.get('sort')

    const handleSortButtonClick = (sortType: string) => {
        // setShouldCloseModal(true)
        startTransition(() => {
            const params = new URLSearchParams(searchParams.toString())

            params.set('sort', sortType)

            router.push(`/kursy?${params.toString()}`, {
                scroll: false,
            })
        })
    }

    return (
        <div className="flex justify-center px-8 py-6 text-xs text-stone400 xl:text-sm">
            <div className={`flex h-fit flex-col overflow-hidden`}>
                {isPending && <LoadingPortal />}
                {sortVariants.map((variant) => (
                    <Button
                        variant="category"
                        restClass="px-3 text-sm xl:text-base lg:px-5"
                        key={variant.name}
                        isActive={currentSortBy === variant.slug}
                        isActiveClass="text-primary  bg-slate50"
                        onClick={() => handleSortButtonClick(variant.slug)}
                    >
                        {variant.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default SortingList
