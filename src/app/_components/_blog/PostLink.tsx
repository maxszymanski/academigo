import Link from 'next/link'

function PostLink({ postLink, title, next = false }: { postLink: string; title: string; next?: boolean }) {
	return (
		<div className="flex justify-between flex-col gap-5 w-fit">
			<Link
				href={postLink}
				scroll={true}
				className={`w-fit max-w-72 p-1 text-base md:text-xl leading-[150%] md:leading-[150%] xl:text-2xl xl:leading-[140%] first-letter:uppercase  flex-shrink-0 text-center sm:text-center transition-colors duration-300 font-medium ${next ? 'text-primary hover:text-primary2' : 'text-dark2 hover:text-dark2/80'}`}>
				{title}
			</Link>
			<p className={` text-dark2/75 text-xs xl:text-sm px-1 text-nowrap ${next ? 'text-end' : 'text-left'}`}>
				{next ? 'Następny Post' : 'Poprzedni Post'}
			</p>
		</div>
	)
}

export default PostLink
