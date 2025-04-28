import { sanitizeHTML } from '../../utils/sanitize'

function CourseDescription({ description = '' }: { description?: string }) {
	const safeHTML = sanitizeHTML(description)

	return (
		<div className="max-w-[70%]">
			<p>Opis</p>
			<div className="course-description" dangerouslySetInnerHTML={{ __html: safeHTML }} />
		</div>
	)
}

export default CourseDescription
