import CommentForm from '@/app/_components/_blog/CommentForm'
import PostComments from '@/app/_components/_blog/PostComments'
import PostContent from '@/app/_components/_blog/PostContent'
import PostHeader from '@/app/_components/_blog/PostHeader'
import PostLink from '@/app/_components/_blog/PostLink'
import Share from '@/app/_components/_blog/Share'
import { getNextPost, getPostBySlug, getPreviousPost } from '@/app/_lib/data-service'
import { blurImage } from '@/app/utils/blurImage'
import { formattedDate } from '@/app/utils/helpers'
import Image from 'next/image'

type Params = Promise<{ post: string }>

export async function generateMetadata({ params }: { params: Params }) {
	const { post } = await params
	const { title } = await getPostBySlug(post)
	return { title: `${title}` }
}

async function page({ params }: { params: Params }) {
	const { post } = await params

	const postDetails = await getPostBySlug(post)
	const nextPost = await getNextPost(postDetails.id)
	const previousPost = await getPreviousPost(postDetails.id)

	const createdAt = formattedDate(postDetails.created_at)

	return (
		<>
			<PostHeader title={postDetails.title} description={postDetails.short_description} createdAt={createdAt} />
			<main className="flex-1 flex items-center justify-center ">
				<div className="container lg:max-w-5xl mx-auto px-4  ">
					<section className=" pt-6 pb-16">
						<div className="h-[500px] max-h-80 sm:max-h-full w-full max-w-5xl relative rounded-xl overflow-hidden">
							<Image
								src={postDetails.image || blurImage}
								fill
								alt="Zdjęcie postu"
								className={` object-fill `}
								priority
								quality={70}
								placeholder="blur"
								blurDataURL={blurImage}
							/>
						</div>
						<PostContent content={postDetails.content} />
						<Share title={postDetails.title} slug={postDetails.slug} />
						<div className="flex w-full items-stretch justify-between pt-12  gap-5 md:pt-14 xl:pt-20 ">
							<PostLink postLink={`/blog/${previousPost?.slug}`} title={previousPost?.title} />
							<PostLink postLink={`/blog/${nextPost?.slug}`} title={nextPost?.title} next />
						</div>
					</section>
					<section className="md:pt-8 pb-16 xl:pt-12">
						<PostComments />
						<CommentForm />
					</section>
				</div>
			</main>
		</>
	)
}

export default page
