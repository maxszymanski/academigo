import PostContent from '@/app/_components/_blog/PostContent'
import PostHeader from '@/app/_components/_blog/PostHeader'
import { getPostBySlug } from '@/app/_lib/data-service'
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

	const createdAt = formattedDate(postDetails.created_at)

	return (
		<>
			<PostHeader title={postDetails.title} description={postDetails.short_description} createdAt={createdAt} />
			<main className="flex-1 flex items-center justify-center ">
				<div className="container lg:max-w-5xl mx-auto px-4  pt-6 pb-16 lg:pt-6 ">
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
				</div>
			</main>
		</>
	)
}

export default page
