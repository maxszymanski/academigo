'use client'
import { FaSearch } from 'react-icons/fa'
import Input from '../_ui/Input'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import LoadingPortal from '../_ui/LoadingPortal'
import Button from '../_ui/Button'

function Search() {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const inputRef = useRef<HTMLInputElement>(null)

	const normalizeText = (text: string) => {
		return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const rawSearch = formData.get('search') as string

		if (rawSearch === '') return

		startTransition(() => {
			const normalizedSearch = normalizeText(rawSearch)

			router.push(`/kursy?search=${encodeURIComponent(normalizedSearch)}`, { scroll: false })

			if (inputRef.current) {
				inputRef.current.value = ''
			}
		})
	}

	return (
		<>
			{isPending && <LoadingPortal />}
			<form className="w-full relative " onSubmit={handleSubmit}>
				<Input
					inputRef={inputRef}
					wrapperClass="bg-primary pb-5 pt-4 rounded-xl sm:px-12  md:px-20 xl:pb-7 xl:pt-5 "
					restClass="pl-10  !placeholder-white/90 !text-white  !border-b-2  sm:text-base placeholder:text-sm xl:placeholder:text-base sm:pb-1 xl:pb-2 apperance-none"
					name="search"
					type="search"
					placeholder="Wyszukaj po nazwie kursu">
					{/* <FaSearch className="mb-1 size-5 text-white/90 sm:mb-0 xl:mb-2" /> */}
				</Input>
				<Button
					variant="transparent"
					restClass="!absolute top-5 !py-1.5 px-3 left-1 sm:left-10 md:left-[72px] xl:top-[26px]">
					<FaSearch className="size-5  pointer-events-none" />
				</Button>
			</form>
		</>
	)
}

export default Search
