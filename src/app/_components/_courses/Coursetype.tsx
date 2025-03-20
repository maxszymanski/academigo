'use client'
import { useTransition } from 'react'
import Button from '../_ui/Button'
import { useRouter, useSearchParams } from 'next/navigation'
import LoadingPortal from '../_ui/LoadingPortal'
import {
    MdOutlineRadioButtonUnchecked,
    MdRadioButtonChecked,
} from 'react-icons/md'

const CoursesTypes = [
    { name: 'Darmowy', slug: 'darmowy' },
    {
        name: 'Płatny',
        slug: 'platny',
    },
]
function Coursetype() {
    const [isPending, startTransition] = useTransition()
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentType = searchParams.get('type')

    const handleCategoryClick = (slug: string) => {
        startTransition(() => {
            const params = new URLSearchParams(searchParams.toString())
            if (currentType === slug) {
                params.delete('type')
            } else {
                params.set('type', slug)
            }

            router.push(`/kursy?${params.toString()}`, { scroll: false })
        })
    }

    return (
        <div className={`'h-fit flex flex-col overflow-hidden`}>
            {isPending && <LoadingPortal />}
            {CoursesTypes.map((type) => (
                <Button
                    variant="category"
                    restClass="px-3 text-sm xl:text-base gap-4"
                    key={type.name}
                    isActive={currentType === type.slug}
                    isActiveClass="text-primary  bg-slate50"
                    onClick={() => handleCategoryClick(type.slug)}
                >
                    <>
                        {currentType === type.slug ? (
                            <MdRadioButtonChecked />
                        ) : (
                            <MdOutlineRadioButtonUnchecked />
                        )}{' '}
                        {type.name}
                    </>
                </Button>
            ))}
        </div>
    )
}

export default Coursetype
