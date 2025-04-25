import { blurImage } from '@/app/utils/blurImage'
import Image from 'next/image'
import { FullCourseDataType } from './CourseCardPanel'

import LikeButton from '../_ui/LikeButton'
import SaveCourseButton from '../_ui/SaveCourseButton'
import Button from '../_ui/Button'

import { FiClock } from 'react-icons/fi'
import { PiUserSound } from 'react-icons/pi'
import { TbAntennaBars5 } from 'react-icons/tb'
import Ratings from './Ratings'
import { FaStar } from 'react-icons/fa'

import { pl } from 'date-fns/locale'
import { format } from 'date-fns'

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
	const addCourseDay = format(new Date(course.created_at), 'd MMMM yyyy', { locale: pl })

	return (
		<div className="absolute right-5 -top-16  flex-shrink-0 flex-grow-0 rounded-lg bg-white w-full max-w-[360px]  text-dark2 shadow-md shadow-stone-200   lg:flex flex-col  overflow-hidden z-20 hidden  ">
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
			<div className=" w-full px-4 pt-8 pb-2 text-dark2/90 flex flex-col gap-5">
				<div>
					<p className="font-semibold text-3xl 2xl:text-4xl">{course.price ? course.price : '0.00'} zł</p>
					<p className="text-xs text-dark2/70 leading-5">
						Cena może ulec zmianie. <br /> Sprawdź aktualną cenę na oficjalnej stronie kursu.
					</p>
				</div>
				<div className="flex flex-col gap-3 ">
					<p className="flex items-center gap-3 ">
						<FiClock className="size-5 text-dark2/75 mr-1" /> <span>{course.duration} godziny</span>
					</p>
					<p className="flex items-center gap-3">
						<PiUserSound className="size-6 text-dark2/75" /> <span>{course.language}</span>
					</p>
					<p className="flex items-center gap-3">
						<TbAntennaBars5 className="size-6 text-dark2/75" /> <span>{course.level}</span>
					</p>
				</div>
				<Button
					href={course.course_link}
					target="_blank"
					variant="white"
					restClass="px-6 xl:text-xl xl:px-10 xl:py-5  w-full hidden lg:flex border border-primary !py-2.5 mt-4 hover:!bg-slate50">
					Odkryj kurs
				</Button>

				<div className="w-full flex flex-col gap-7 pt-4 ">
					<div className="pl-1">
						<p className=" text-dark2/75">
							Dodany: <span className="ml-2 text-dark2/90">{addCourseDay}</span>{' '}
							<span className="ml-2 text-dark2/90">Max</span>
						</p>
					</div>
					<Ratings courseId={course.id} courseRate={rate} userId={userId} ratedCount={course.ratings_count} />
					<div className="flex gap-2 items-center w-full ">
						<LikeButton
							courseId={course.id}
							isLikedCourse={isLiked}
							userId={userId}
							courseLikes={course.likes_count}
						/>
						<SaveCourseButton
							courseId={course.id}
							isSavedCourse={isSavedCourse}
							userId={userId}
							savedCount={course.saved_count}
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
	)
}

export default SingleDetails
