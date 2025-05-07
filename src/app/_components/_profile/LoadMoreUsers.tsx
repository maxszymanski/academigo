'use client'
import { useTransition } from 'react'
import Button from '../_ui/Button'
import { useRouter } from 'next/navigation'
import Spinner from '../_ui/Spinner'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function LoadMoreUsers({
	limit,
	filter,
	resultNumber,
	usersLength,
}: {
	limit: number
	filter: string
	resultNumber: number
	usersLength: number
}) {
	const [isPending, startTransition] = useTransition()
	const router = useRouter()

	const LIMIT_NUMBER = 50

	const allUsersShowed = resultNumber === usersLength
	const loadAllUsers = usersLength - resultNumber < 2
	const handleSetSearchParams = () => {
		startTransition(() => {
			if (allUsersShowed) {
				router.push(`/ranking?filter=${filter}&limit=${LIMIT_NUMBER}`)
			} else if (!loadAllUsers) {
				router.push(`/ranking?filter=${filter}&limit=${limit + LIMIT_NUMBER + 1}`)
			} else {
				router.push(`/ranking?filter=${filter}&limit=${usersLength}`)
			}
		})
	}

	return (
		<li className="w-full my-3 px-4 flex justify-between items-center min-h-10">
			<p className="text-dark2/85 text-sm">
				{resultNumber} z {usersLength} użytkowników
			</p>

			{isPending && usersLength > LIMIT_NUMBER && <Spinner />}
			{!isPending && usersLength > LIMIT_NUMBER && (
				<Button
					variant="transparentDark"
					restClass="py-2 px-6 !text-primary hover:!bg-dark2/10"
					onClick={handleSetSearchParams}>
					{allUsersShowed ? 'Zwiń' : 'Pokaż więcej'}{' '}
					{allUsersShowed ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
				</Button>
			)}
		</li>
	)
}

export default LoadMoreUsers
