'use client'

import toast from 'react-hot-toast'
import Button from './Button'

import { useState } from 'react'
import { saveCourse, unSaveCourse } from '@/app/_actions/mutations'
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi'

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

		// setIsSaved(is => !is)

		// if (!isSaved) {
		// 	toast.success('Kurs został dodany do zakładek')
		// 	await saveCourse(courseId)
		// }
		// if (isSaved) {
		// 	toast.error('Kurs został usunięty z zakładek')
		// 	await unSaveCourse(courseId)
		// }
	}

	return (
		<div className="flex items-center gap-0">
			<Button
				variant="transparent"
				restClass="!text-sky-400 hover:!text-sky-500 "
				onClick={handleSave}
				title={isSaved ? 'Usuń z zakładek' : 'Dodaj do zakładek'}
				aria-label={isSaved ? 'Usuń z zakładek' : 'Dodaj do zakładek'}>
				{isSaved ? (
					<BiSolidBookmark className="size-9 pointer-events-none" />
				) : (
					<BiBookmark className="size-9 pointer-events-none" />
				)}
			</Button>
			<p className="text-dark2 text-sm">{saved}</p>
		</div>
	)
}

export default SaveCourseButton
