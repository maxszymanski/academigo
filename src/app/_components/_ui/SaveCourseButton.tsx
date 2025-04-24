'use client'

import toast from 'react-hot-toast'
import Button from './Button'

import { useState } from 'react'
import { saveCourse, unSaveCourse } from '@/app/_actions/mutations'
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi'

function SaveCourseButton({ courseId, isSavedCourse }: { courseId: string; isSavedCourse: boolean }) {
	const [isSaved, setIsSaved] = useState(isSavedCourse || false)

	const handleSave = async () => {
		setIsSaved(is => !is)

		if (!isSaved) {
			toast.success('Kurs został dodany do zakładek')
			await saveCourse(courseId)
		}
		if (isSaved) {
			toast.error('Kurs został usunięty z zakładek')
			await unSaveCourse(courseId)
		}
	}

	return (
		<Button
			variant="transparent"
			restClass="!text-sky-400 hover:!text-sky-500 p-2"
			onClick={handleSave}
			title={isSaved ? 'Usuń z zakładek' : 'Dodaj do zakładek'}
			aria-label={isSaved ? 'Usuń z zakładek' : 'Dodaj do zakładek'}>
			{isSaved ? (
				<BiSolidBookmark className="size-11 pointer-events-none" />
			) : (
				<BiBookmark className="size-11 pointer-events-none" />
			)}
		</Button>
	)
}

export default SaveCourseButton
