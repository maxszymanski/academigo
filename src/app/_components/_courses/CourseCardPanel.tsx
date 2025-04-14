import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { CiBank } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'
import { ExtendedCourseType } from '../_panel/EditCourseForm'
import { blurImage } from '@/app/utils/blurImage'

function CourseCardPanel({
	i = 8,
	isMainPage = false,
	isList = false,
	course,
	href,
}: {
	i?: number
	isMainPage?: boolean
	isList?: boolean
	course: ExtendedCourseType
	href: string
}) {
	return (
		<Link
			href={href}
			className={`relative flex justify-between overflow-hidden rounded-2xl border bg-white text-sm shadow-md shadow-stone-200 transition-all duration-300 hover:bg-slate-50 hover:shadow-primary ${
				isMainPage ? (i < 8 ? 'flex flex-shrink-0' : 'flex flex-shrink-0 2xl:hidden') : 'flex'
			} ${isList ? 'w-full ' : 'h-[370px] max-w-[330px] flex-col'} `}>
			<div className="t-0 absolute right-0 rounded-bl-2xl bg-primary px-5 py-3 font-semibold text-white z-20 w-[110px] text-center">
				{course.free ? 'Darmowy' : `${course.price} zł`}
			</div>
			<div
				className={`z-10 h-[200px] w-[330px] relative ${isList ? 'rounded-2xl' : 'rounded-t-2xl border-b border-slate-200'}`}>
				<Image
					src={course.picture || '/course.jpg'}
					fill
					alt="course image"
					className={` object-cover ${isList ? 'rounded-2xl' : 'rounded-t-2xl'}`}
					priority
					quality={70}
					placeholder="blur"
					blurDataURL={blurImage}
				/>
			</div>
			<div
				className={`flex flex-1 flex-col justify-between rounded-b-2xl text-stone400 ${isList ? 'px-6 py-3' : 'px-3 py-2'}`}>
				<h3
					className={`text-base font-semibold overflow-hidden overflow-ellipsis whitespace-normal line-clamp-2 h-12  ${isList ? 'max-w-[70%]' : 'pr-2'} `}>
					{course.title}
				</h3>
				<div>
					<p className="text-primary py-0.5">
						<span className="font-medium">{course.specialization}</span>
					</p>
					<p className="text-stone400 py-0.5">
						Poziom: <span className="ml-2 font-medium">{course.level}</span>
					</p>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<FaStar className="mb-0.5 text-yellow-500" />{' '}
						<p>
							<span>0</span> <span>(brak ocen)</span>
						</p>
					</div>

					<div className="flex items-center gap-1">
						<CiBank className="mb-0.5 size-4" />
						<p>{course.platform}</p>
					</div>
					<div className="flex items-center gap-1">
						<FaHeart className="mb-0.5 size-4 text-primary" />
						<p>0</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CourseCardPanel
