import { blurImage } from '@/app/utils/blurImage'
import Image from 'next/image'
import { FullCourseDataType } from '../_courses/CourseCardPanel'

import LikeButton from '../_ui/LikeButton'

function SingleDetails({
	course,
	userId,
	isLiked,
}: {
	course: FullCourseDataType
	userId: string | null
	isLiked: boolean
}) {
	return (
		<div className="absolute right-5 -top-10  flex-shrink-0 flex-grow-0 rounded-lg bg-white w-full max-w-[360px]  text-dark2 shadow-md shadow-stone-200   lg:flex flex-col  overflow-hidden z-20 hidden ">
			<div className="z-30 h-[220px]   w-full relative border-b border-slate-200 ">
				<Image
					src={course.picture || '/course.jpg'}
					fill
					alt="obraz kursu"
					className={` object-cover `}
					priority
					quality={70}
					placeholder="blur"
					blurDataURL={blurImage}
				/>
			</div>
			<div className="h-[400px] w-full px-4 py-8 text-dark2/90">
				<p className="font-semibold text-3xl 2xl:text-4xl">{!course.price ? course.price : '0.00'} zł</p>
				<p></p>
				{userId && (
					<div>
						<LikeButton courseId={course.id} isLikedCourse={isLiked} />
					</div>
				)}
			</div>
		</div>
	)
}

export default SingleDetails
