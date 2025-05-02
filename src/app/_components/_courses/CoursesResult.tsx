'use client'

import useAppStore from '@/app/stores/store'
import CourseCardPanel from './CourseCardPanel'
import { FullCourseDataType } from '@/app/_types/types'

function CoursesResult({ courses }: { courses: FullCourseDataType[] }) {
	const cardView = useAppStore(state => state.cardView)
	return (
		<div className="relative flex w-full flex-wrap justify-center gap-x-5 gap-y-6 pt-12 lg:justify-evenly xl:gap-x-2 2xl:justify-between 2xl:gap-y-10">
			{courses && courses.length > 0 ? (
				courses.map(course => (
					<CourseCardPanel
						course={course}
						key={course.id}
						href={`/kursy/${course.id}`}
						isList={cardView === 'list'}
						target="_blank"
					/>
				))
			) : (
				<p>Nie znaleziono żadnych wyników</p>
			)}
		</div>
	)
}

export default CoursesResult
