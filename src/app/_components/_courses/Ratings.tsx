'use client'

import { useState } from 'react'
import { Rating, Star } from '@smastrom/react-rating'
import toast from 'react-hot-toast'
import { rateCourse } from '@/app/_actions/mutations'

const myStyles = {
	itemShapes: Star,
	activeFillColor: '#facc15',
	inactiveFillColor: '#fff',
	activeStrokeColor: '#facc15',
	inactiveStrokeColor: '#facc15',
	itemStrokeWidth: 2,
}

function Ratings({
	courseId,
	courseRate,
	userId,
	ratedCount,
}: {
	courseId: string
	courseRate?: number
	userId?: string
	ratedCount: number
}) {
	const [rating, setRating] = useState(courseRate || 0)
	const [count, setCount] = useState(ratedCount || 0)

	const textFormat = count == 1 ? 'ocena' : count == 2 || count == 3 || count == 4 ? 'oceny' : 'ocen'

	const handleRating = async (rate: number) => {
		if (!userId) {
			toast.error('Funkcja dostępna tylko dla zalogowanych użytkowników')
			setRating(0)
			return
		}

		try {
			toast.promise(rateCourse(courseId, rate, !!courseRate), {
				loading: 'Dodawanie oceny kursu',
				success: 'Ocena kursu została zmieniona',
				error: 'Wystąpił błąd podczas dodawania oceny.',
			})
			setRating(rate)
			if (!courseRate) {
				setCount(c => c + 1)
			}
		} catch (error) {
			console.error(error)
			return
		}
	}

	return (
		<div>
			<p className=" text-dark2 leading-4 mb-4 ">Oceń kurs</p>
			<div className="flex w-full items-center  gap-2">
				<Rating
					onChange={handleRating}
					value={rating}
					transition="zoom"
					itemStyles={myStyles}
					style={{ maxWidth: '200px' }}
					spaceBetween="small"
					spaceInside="small"
					isRequired
				/>

				<p className="text-base text-dark2 leading-4 mt-1">
					{count} {textFormat}
				</p>
			</div>
		</div>
	)
}

export default Ratings
