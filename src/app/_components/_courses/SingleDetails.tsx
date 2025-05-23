import { blurImage } from '@/app/utils/blurImage'
import Image from 'next/image'

import LikeButton from '../_ui/LikeButton'
import SaveCourseButton from '../_ui/SaveCourseButton'
import Button from '../_ui/Button'

import { FiClock } from 'react-icons/fi'
import { PiUserSound, PiCalendarPlus } from 'react-icons/pi'
import { TbAntennaBars5 } from 'react-icons/tb'
import Ratings from './Ratings'
import { FaStar } from 'react-icons/fa'
import DefaultImage from '@/assets/default_course.webp'
import { FullCourseDataType } from '@/app/_types/types'
import { formattedDate } from '@/app/utils/helpers'

function SingleDetails({
	course,
	userId,
	isLiked,
	isSavedCourse,
	rate,
}: {
	course: FullCourseDataType
	userId?: string
	isLiked: boolean
	isSavedCourse: boolean
	rate?: number
}) {
	const addCourseDay = formattedDate(course.created_at)

	return (
		<div className="lg:sticky lg:right-5 lg:top-8 lg:-mt-32  flex-shrink-0 flex-grow-0 rounded-lg lg:bg-white w-full max-w-[360px]  text-dark2 lg:shadow-md shadow-stone-200   flex flex-col  overflow-hidden z-20  pb-12 lg:pb-0">
			<div className=" z-30 h-[220px] hidden lg:block   w-full relative border-b border-slate-200 ">
				<Image
					src={course.picture || DefaultImage}
					fill
					alt="obraz kursu"
					className={` object-cover `}
					priority
					quality={70}
					placeholder="blur"
					blurDataURL={blurImage}
				/>
			</div>
			<div className=" w-full lg:px-4 lg:pt-8 pb-2 text-dark2/90 flex flex-col gap-5">
				<div>
					<p className="font-semibold text-5xl lg:text-4xl ">{course.price ? course.price : '0.00'} zł</p>
					<p className="text-xs text-dark2/70 leading-5">
						Cena może ulec zmianie. <br /> Sprawdź aktualną cenę na oficjalnej stronie kursu.
					</p>
				</div>
				<div className="flex flex-col gap-3 ">
					<p className="flex items-center gap-3 ">
						<FiClock className="size-5 text-dark2/75 mr-1" /> <span>{course.duration}</span>
					</p>
					<p className="flex items-center gap-3">
						<PiUserSound className="size-6 text-dark2/75" /> <span>{course.language}</span>
					</p>
					<p className="flex items-center gap-3">
						<TbAntennaBars5 className="size-6 text-dark2/75" /> <span>{course.level}</span>
					</p>
					<p className="flex items-center gap-3">
						<PiCalendarPlus className="size-6 text-dark2/75" /> <span>{addCourseDay}</span>
					</p>
				</div>
				<Button
					href={course.course_link}
					target="_blank"
					variant="white"
					restClass="px-6 xl:text-xl xl:px-10 xl:py-5  w-full flex border border-primary !py-2.5 mt-4 hover:!bg-slate50">
					Odkryj kurs
				</Button>

				<div className="w-full flex flex-col gap-6 pt-3 pb-1 ">
					<Ratings courseId={course.id} courseRate={rate} userId={userId} ratedCount={course.ratings_count} />
					<div>
						<p className="mb-4">Zapisz lub polub kurs</p>
						<div className="flex gap-4 items-center w-full ">
							<SaveCourseButton
								courseId={course.id}
								isSavedCourse={isSavedCourse}
								userId={userId}
								savedCount={course.saved_count}
							/>
							<LikeButton
								courseId={course.id}
								isLikedCourse={isLiked}
								userId={userId}
								courseLikes={course.likes_count}
							/>

							<div className="flex items-center gap-2 ml-auto">
								<FaStar className=" text-yellow-400 size-8 " />{' '}
								<p className="text-dark-2">
									<span>{course?.average_rating || 0} / 5</span>{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleDetails
