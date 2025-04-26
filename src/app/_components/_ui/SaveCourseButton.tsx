'use client'

import toast from 'react-hot-toast'
import Button from './Button'

import { useEffect, useState } from 'react'
import { saveCourse, unSaveCourse } from '@/app/_actions/mutations'
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi'
import { trackCourseView } from '@/app/_lib/client-service'

function SaveCourseButton({
	courseId,
	isSavedCourse,
	userId,
	savedCount,
}: {
	courseId: string
	isSavedCourse: boolean
	userId?: string
	savedCount: number
}) {
	const [isSaved, setIsSaved] = useState(isSavedCourse || false)
	const [saved, setSaved] = useState(savedCount || 0)

	useEffect(() => {
		if (courseId) {
			trackCourseView(courseId)
		}
	}, [courseId])

	const handleSave = async () => {
		if (!userId) {
			toast.error('Funkcja dostępna tylko dla zalogowanych użytkowników')
			return
		}

		if (!isSaved) {
			try {
				setIsSaved(true)
				setSaved(saved => saved + 1)
				await toast.promise(saveCourse(courseId), {
					loading: 'Dodawanie kursu do zapisanych',
					success: 'Kurs został dodany do zapisanych',
					error: 'Wystąpił błąd podczas dodawania',
				})
			} catch (error) {
				setIsSaved(false)
				setSaved(saved => saved - 1)
				console.error(error)
			}
		}
		if (isSaved) {
			try {
				setIsSaved(false)
				setSaved(saved => saved - 1)
				await toast.promise(unSaveCourse(courseId), {
					loading: 'Usuwanie kursu z zapisanych',
					success: 'Kurs został usunięty z zapisanych',
					error: 'Wystąpił błąd podczas usuwania',
				})
			} catch (error) {
				setIsSaved(true)
				setSaved(saved => saved + 1)
				console.error(error)
			}
		}
	}

	return (
		<div className="flex items-center gap-0.5">
			<Button
				variant="transparent"
				restClass="!text-fuchsia-700 hover:!text-fuchsia-600 p-0.5"
				onClick={handleSave}
				title={isSaved ? 'Usuń z zakładek' : 'Dodaj do zakładek'}
				aria-label={isSaved ? 'Usuń z zakładek' : 'Dodaj do zakładek'}>
				{isSaved ? (
					<BiSolidBookmark className="size-8 pointer-events-none" />
				) : (
					<BiBookmark className="size-8 pointer-events-none" />
				)}
			</Button>
			<p className="text-dark2 text-base">{saved}</p>
		</div>
	)
}

export default SaveCourseButton
