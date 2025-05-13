import BlogCard from '../_components/_blog/BlogCard'
import BlogHeader from '../_components/_blog/BlogHeader'

import { getPostsSlugs } from '../_lib/data-service'
import { PostProps } from '../_types/types'

export default async function Blog() {
	const posts = await getPostsSlugs()

	return (
		<>
			<BlogHeader />

			<main className="flex-1 flex items-center justify-center ">
				<div className="container mx-auto px-4  pt-6 pb-16 lg:pt-16 lg:pb-24 xl:pb-32">
					<div className="flex flex-col items-center gap-10 sm:gap-14">
						{posts && posts.length > 0 ? (
							posts.map((post: PostProps) => <BlogCard key={post.id} post={post} />)
						) : (
							<p className="text-center pt-12 text-dark2/90">
								Wystąpił problem z pobieraniem postów. Prosimy spróbować później
							</p>
						)}
					</div>
				</div>
			</main>
		</>
	)
}
