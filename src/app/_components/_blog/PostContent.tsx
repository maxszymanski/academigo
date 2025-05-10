import { sanitizeHTML } from '@/app/utils/sanitize'

function PostContent({ content }: { content: string }) {
	const safeHTML = sanitizeHTML(content)

	return (
		<div
			className=" text-sm  text-dark2/90 w-full pt-12 xl:text-base
             blog"
			dangerouslySetInnerHTML={{ __html: safeHTML }}
		/>
	)
}

export default PostContent
