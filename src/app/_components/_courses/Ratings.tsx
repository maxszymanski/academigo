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

<<<<<<< HEAD
function Ratings({ courseId, courseRate }: { courseId: string; courseRate?: number }) {
	const [rating, setRating] = useState(courseRate || 0)
=======
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
>>>>>>> 4786580f8bc73c73458e0229cb8a1272cf732b69

	const handleRating = async (rate: number) => {
		if (!userId) {
			toast.error('Funkcja dostępna tylko dla zalogowanych użytkowników')
			setRating(0)
			return
		}

<<<<<<< HEAD
		// await rateCourse(courseId, rate)
		toast.success(`Kurs został oceniony na ${rate} `)
=======
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
>>>>>>> 4786580f8bc73c73458e0229cb8a1272cf732b69
	}

	return (
		<div className="flex w-full items-center justify-end gap-2">
			<Rating
				onChange={handleRating}
				value={rating}
				transition="zoom"
				itemStyles={myStyles}
				style={{ height: '42px', maxWidth: '140px' }}
				spaceBetween="small"
				spaceInside="small"
			/>

			<p className="text-sm text-dark2 leading-4">{count} ocen</p>
		</div>
	)
}

export default Ratings
