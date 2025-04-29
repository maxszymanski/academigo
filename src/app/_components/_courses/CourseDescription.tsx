import { sanitizeHTML } from '../../utils/sanitize'

function CourseDescription({ description = '' }: { description?: string }) {
	const safeHTML = sanitizeHTML(description)

	return <div className="course-description text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: safeHTML }} />
}

export default CourseDescription
