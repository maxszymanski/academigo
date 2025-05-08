'use client'

import useAppStore from '@/app/stores/store'
import CourseCardPanel from './CourseCardPanel'
import { FullCourseDataType } from '@/app/_types/types'

import { useRouter, useSearchParams } from 'next/navigation'
import Button from '../_ui/Button'
import { useTransition } from 'react'
import LoadingPortal from '../_ui/LoadingPortal'

function CoursesResult({
	courses,
	page,
	isEnd,
	isMoreThanOnePage,
}: {
	courses: FullCourseDataType[] | null
	page: string
	isEnd: boolean
	isMoreThanOnePage: boolean
}) {
	const cardView = useAppStore(state => state.cardView)
	const [isPending, startTransition] = useTransition()
	const searchParams = useSearchParams()
	const router = useRouter()

	const pageNumberAdd = (Number(page) + 1).toString()
	const pageNumberSub = (Number(page) - 1).toString()

	const handleResetFilter = () => {
		const params = new URLSearchParams(searchParams.toString())

		params.delete('search')
		params.delete('category')
		params.delete('subcategory')
		params.delete('specialization')
		params.delete('type')

		router.push(`/kursy?${params.toString()}`, { scroll: true })
	}

	const handlePreviusPage = () => {
		startTransition(() => {
			if (page === '1') return

			const params = new URLSearchParams(searchParams.toString())

			params.set('page', pageNumberSub)

			router.push(`/kursy?${params.toString()}`, { scroll: true })
		})
	}
	const handleNextPage = () => {
		startTransition(() => {
			if (isEnd) return
			const params = new URLSearchParams(searchParams.toString())

			params.set('page', pageNumberAdd)

			router.push(`/kursy?${params.toString()}`, { scroll: false })
		})
	}

	return (
		<div className="w-full h-full">
			{isPending && <LoadingPortal />}
			<div className="relative flex w-full flex-wrap justify-center gap-x-5 gap-y-6 pt-10 md:pt-16 lg:justify-evenly xl:gap-x-2  2xl:gap-y-10 h-full ">
				{courses && courses.length > 0 ? (
					courses.map(course => (
						<CourseCardPanel
							course={course}
							key={course.id}
							href={`/kursy/${course.id}`}
							isList={cardView === 'list'}
						/>
					))
				) : (
					<div className="h-full flex flex-col items-center justify-center pb-6 lg:pt-10">
						<p className="text-center text-sm lg:!text-lg xl:text-xl mb-6 font-medium">
							Nie znaleziono żadnych wyników
						</p>
						<Button
							onClick={handleResetFilter}
							restClass="!text-sm !py-3 lg:!text-base xl:!text-lg"
							variant="submit">
							Przeglądaj wszystkie kursy
						</Button>
					</div>
				)}
			</div>
			{isMoreThanOnePage && (
				<div className=" pr-6 pt-8 lg:pt-12 justify-items-end my-auto items-end">
					<div className="flex gap-3 items-center">
						<Button
							variant="purple"
							restClass="md:!px-10 !text-xs disabled:hidden md:!text-sm"
							onClick={handlePreviusPage}
							disabled={page === '1'}>
							Poprzednia
						</Button>
						<p className="bg-primary h-8 w-8 md:h-12 md:w-12 flex items-center justify-center  rounded-full text-white text-xs sm:text-base">
							{page}
						</p>
						<Button
							variant="purple"
							restClass="md::!px-10 !text-xs disabled:hidden md:!text-sm"
							onClick={handleNextPage}
							disabled={isEnd}>
							Następna{' '}
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default CoursesResult
