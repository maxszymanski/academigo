'use client'

import toast from 'react-hot-toast'
import Button from './Button'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'
import { likeCourse, unlikeCourse } from '@/app/_actions/mutations'

function LikeButton({
	courseId,
	isLikedCourse,
	userId,
	courseLikes,
}: {
	courseId: string
	isLikedCourse: boolean
	userId?: string
	courseLikes: number
}) {
	const [isLiked, setIsLiked] = useState(isLikedCourse || false)
	const [likesCount, setLikesCount] = useState(courseLikes || 0)

	const handleLike = async () => {
		if (!userId) {
			toast.error('Funkcja dostępna tylko dla zalogowanych użytkowników')
			return
		}
		if (!isLiked) {
			try {
				setIsLiked(true)
				setLikesCount(l => l + 1)
				await toast.promise(likeCourse(courseId), {
					loading: 'Dodawanie kursu do polubionych',
					success: 'Kurs został dodany do polubionych',
					error: 'Wystąpił błąd podczas dodawania',
				})
			} catch (error) {
				setIsLiked(false)
				setLikesCount(l => l - 1)
				console.error(error)
			}
		}
		if (isLiked) {
			try {
				setIsLiked(false)
				setLikesCount(l => l - 1)
				await toast.promise(unlikeCourse(courseId), {
					loading: 'Usuwanie kursu z polubionych',
					success: 'Kurs został usunięty z polubionych',
					error: 'Wystąpił błąd podczas usuwania',
				})
			} catch (error) {
				setIsLiked(true)
				setLikesCount(l => l + 1)
				console.error(error)
			}
		}
	}

	return (
		<div className="flex items-center gap-1">
			<Button
				variant="transparent"
				restClass="!text-primary hover:!text-primary/80 p-0.5 "
				onClick={handleLike}
				title={isLiked ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
				aria-label={isLiked ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}>
				{isLiked ? (
					<FaHeart className="size-8 pointer-events-none" />
				) : (
					<FaRegHeart className="size-8 pointer-events-none" />
				)}
			</Button>

			<p className="text-dark2 text-base">{likesCount}</p>
		</div>
	)
}

export default LikeButton
