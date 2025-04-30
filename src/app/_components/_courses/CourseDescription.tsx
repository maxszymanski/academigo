import { sanitizeHTML } from '../../utils/sanitize'

function CourseDescription({ description = '' }: { description?: string }) {
	const safeHTML = sanitizeHTML(description)

	return (
		<div
			className="course-description text-sm sm:text-base lg:min-h-[350px]"
			dangerouslySetInnerHTML={{ __html: safeHTML }}
		/>
	)
}

export default CourseDescription
