import { blurImage } from '@/app/utils/blurImage'
import Image from 'next/image'
import Button from '../_ui/Button'
import { PostProps } from '@/app/_types/types'
import { formattedDate } from '@/app/utils/helpers'

function BlogCard({ post }: { post: PostProps }) {
	const { title, created_at, slug, short_description, image } = post

	const createdPost = formattedDate(created_at)

	return (
		<div className="w-full max-w-3xl overflow-hidden  bg-white text-dark2 rounded-lg shadow-md border border-stone-200 shadow-stone-200 transition-all duration-300 hover:bg-slate-50  hover:shadow-primary outline-offset-2 outline-primary">
			<div className="h-[425px] max-h-80 sm:max-h-full w-full max-w-3xl relative ">
				<Image
					src={image || blurImage}
					fill
					alt="Zdjęcie postu"
					className={` object-fill `}
					priority
					quality={70}
					placeholder="blur"
					blurDataURL={blurImage}
				/>
			</div>
			<div className="px-4 sm:px-10 py-6 text-xs max-w-[600px] sm:py-8 md:pr-0 xl:pb-10 xl:pl-14 ">
				<div className="mb-7">
					<h3 className="text-xl md:text-2xl font-semibold text-primary text-center sm:text-start">
						{title}
					</h3>
					<p className=" text-dark2/80 mt-3 sm:mt-2"> {createdPost}</p>
				</div>
				<div>
					<p className="leading-[180%] mb-7 sm:text-sm sm:leading-[180%]">{short_description}</p>
					<Button
						variant="submit"
						href={`/blog/${slug}`}
						restClass="!px-8 !py-2.5 !text-sm xl:!px-10 xl:!text-base max-w-[180px]">
						Czytaj więcej
					</Button>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
