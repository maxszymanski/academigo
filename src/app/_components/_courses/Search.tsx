'use client'
import { FaSearch } from 'react-icons/fa'
import Input from '../_ui/Input'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import LoadingPortal from '../_ui/LoadingPortal'

function Search() {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const normalizeText = (text: string) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        startTransition(() => {
            const formData = new FormData(e.currentTarget)
            const rawSearch = formData.get('search') as string
            const normalizedSearch = normalizeText(rawSearch)

            router.push(`/kursy?search=${encodeURIComponent(normalizedSearch)}`)
        })
    }

    return (
        <>
            {isPending && <LoadingPortal />}
            <form className="w-full" onSubmit={handleSubmit}>
                <Input
                    wrapperClass="bg-primary pb-5 pt-4 rounded-xl sm:px-12  md:px-20 xl:pb-7 xl:pt-5"
                    restClass="pl-10 !placeholder-white/90 !text-white  !border-b-2  sm:text-base placeholder:text-sm xl:placeholder:text-base sm:pb-1 xl:pb-2"
                    name="search"
                    type="search"
                    placeholder="Wyszukaj po nazwie kursu"
                >
                    <FaSearch className="mb-1 size-5 text-white/90 sm:mb-0 xl:mb-2" />
                </Input>
            </form>
        </>
    )
}

export default Search
