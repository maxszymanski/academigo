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

function Ratings({ courseId, isRatedCourse }: { courseId: string; isRatedCourse: boolean }) {
	const [rating, setRating] = useState(0)

	// Catch Rating value
	const handleRating = async (rate: number) => {
		setRating(rate)

		await rateCourse(courseId, rating)
		toast.success('Kurs został dodany do zakładek')
	}

	return <Rating onChange={handleRating} value={rating} transition="zoom" itemStyles={myStyles} />
}

export default Ratings
