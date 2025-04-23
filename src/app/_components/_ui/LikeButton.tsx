'use client'

import toast from 'react-hot-toast'
import Button from './Button'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'
import { likeCourse, unlikeCourse } from '@/app/_actions/mutations'

function LikeButton({ courseId, isLikedCourse }: { courseId: string; isLikedCourse: boolean }) {
	const [isLiked, setIsLiked] = useState(isLikedCourse || false)

	const handleLike = async () => {
		setIsLiked(is => !is)

		if (!isLiked) {
			toast.success('Kurs dodany do ulubionych')
			await likeCourse(courseId)
		}
		if (isLiked) {
			toast.error('Kurs usunięty z ulubionych')
			await unlikeCourse(courseId)
		}
	}

	return (
		<Button
			variant="transparent"
			restClass="!text-primary hover:!text-primary/80 p-2"
			onClick={handleLike}
			title={isLiked ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
			aria-label={isLiked ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}>
			{isLiked ? (
				<FaHeart className="size-10 pointer-events-none" />
			) : (
				<FaRegHeart className="size-10 pointer-events-none" />
			)}
		</Button>
	)
}

export default LikeButton
