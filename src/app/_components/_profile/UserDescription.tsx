import { sanitizeHTML } from '@/app/utils/sanitize'

function UserDescription({ description = '' }: { description?: string }) {
	const safeHTML = sanitizeHTML(description)
	return (
		<div className="py-2 text-dark2">
			<h2 className=" text-xl font-medium pb-4">Opis</h2>
			<div
				className="course-description text-sm sm:text-base lg:min-h-[350px]"
				dangerouslySetInnerHTML={{ __html: safeHTML }}
			/>
		</div>
	)
}

export default UserDescription
