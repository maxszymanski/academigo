import { sanitizeHTML } from '@/app/utils/sanitize'

function UserDescription({ description = '' }: { description?: string }) {
	const safeHTML = sanitizeHTML(description)
	return (
		<div className="bg-slate50 w-full mt-6 xl:mt-8 ">
			<div className="py-6 lg:py-8  text-dark2  px-4 md:px-8 xl:py-12  lg:container xl:max-w-4xl mx-auto ">
				<h2 className=" text-xl font-medium pb-4 text-primary md:text-2xl xl:text-3xl md:text-center">
					O mnie
				</h2>
				<div
					className="course-description text-sm sm:text-base xl:text-lg user-description xl:max-w-6xl "
					dangerouslySetInnerHTML={{ __html: safeHTML }}
				/>
			</div>
		</div>
	)
}

export default UserDescription
