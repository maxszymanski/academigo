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

function Ratings({ courseId, courseRate }: { courseId: string; courseRate?: number }) {
	const [rating, setRating] = useState(courseRate || 0)

	// Catch Rating value
	const handleRating = async (rate: number) => {
		setRating(rate)

		// await rateCourse(courseId, rate)
		toast.success(`Kurs został oceniony na ${rate} `)
	}

	return <Rating onChange={handleRating} value={rating} transition="zoom" itemStyles={myStyles} />
}

export default Ratings
