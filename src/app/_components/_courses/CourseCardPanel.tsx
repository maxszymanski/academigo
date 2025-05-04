import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { CiBank } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'
import { blurImage } from '@/app/utils/blurImage'
import { FullCourseDataType } from '@/app/_types/types'
import Button from '../_ui/Button'

function CourseCardPanel({
	i = 8,
	isMainPage = false,
	isList = false,
	course,
	href,
	target = '_self',
	row = false,
	hrefEdit,
}: {
	i?: number
	isMainPage?: boolean
	isList?: boolean
	course: FullCourseDataType
	href: string
	target?: string
	row?: boolean

	hrefEdit?: string
}) {
	return (
		<>
			{hrefEdit ? (
				<div
					className={`relative flex justify-between overflow-hidden rounded-2xl border bg-white text-sm shadow-md shadow-stone-200 transition-all duration-300 hover:bg-slate-50 hover:shadow-primary outline-offset-2 outline-primary   
			 h-[460px] max-w-[330px] flex-col `}>
					<div className="t-0 absolute right-0 rounded-bl-2xl bg-primary px-5 py-3 font-semibold text-white z-20 w-[110px] text-center">
						{course.free ? 'Darmowy' : `${course.price} zł`}
					</div>
					<div
						className={`z-10 h-[200px] w-[330px] relative ${isList ? 'rounded-2xl' : 'rounded-t-2xl border-b border-slate-200'}`}>
						<Image
							src={course.picture || '/course.jpg'}
							fill
							alt="course image"
							className={` object-cover rounded-t-2xl`}
							priority
							quality={70}
							placeholder="blur"
							blurDataURL={blurImage}
						/>
					</div>
					<div className={`flex flex-1 flex-col justify-between rounded-b-2xl text-stone400 px-3 py-2`}>
						<h3
							className={`text-base font-semibold overflow-hidden overflow-ellipsis whitespace-normal line-clamp-2 h-12  ${isList ? 'max-w-[70%]' : 'pr-2'} `}>
							{course.title}
						</h3>
						<div>
							<p className="text-primary py-0.5">
								<span className="font-medium">{course.specialization_name}</span>
							</p>
							<p className="text-stone400 py-0.5">
								Poziom: <span className="ml-2 font-medium">{course.level}</span>
							</p>
						</div>

						<div className="flex items-center justify-between text-xs sm:text-sm">
							<div className="flex items-center gap-1">
								<FaStar className="mb-0.5 text-yellow-500" />{' '}
								<p>
									<span>{course.average_rating || 0}</span>{' '}
									<span>
										({course.ratings_count > 0 ? `${course.ratings_count} ocen` : 'Brak ocen'})
									</span>
								</p>
							</div>

							<div className="flex items-center gap-1">
								<CiBank className="mb-0.5 size-4" />
								<p>{course.platform}</p>
							</div>
							<div className="flex items-center gap-1">
								<FaHeart className="mb-0.5 size-4 text-primary" />
								<p>{course.likes_count || 0}</p>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-evenly gap-2 px-2 pb-3 pt-5 ">
						<Button
							href={href}
							variant="submit"
							restClass="text-base !py-2 px-6 min-w-[120px] sm:!px-10 sm:min-w-[130px] !bg-primary !text-white hover:!bg-primary/80">
							Kurs
						</Button>
						<Button
							href={hrefEdit}
							variant="submit"
							restClass="text-base !py-2 px-6 min-w-[120px] sm:!px-10 sm:min-w-[130px]">
							Edytuj
						</Button>
					</div>
				</div>
			) : (
				<Link
					href={href}
					className={`relative flex justify-between overflow-hidden rounded-2xl border bg-white text-sm shadow-md shadow-stone-200 transition-all duration-300 hover:bg-slate-50 hover:shadow-primary outline-offset-2 outline-primary ${row ? ' flex-shrink-0' : 'sm:flex-shrink-0'}  ${
						isMainPage ? (i < 8 ? 'flex ' : 'flex  2xl:hidden') : 'flex'
					} ${isList ? 'w-full ' : 'h-[370px] max-w-[330px] flex-col'} `}
					rel="noopener noreferrer"
					target={target}>
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
								<span className="font-medium">{course.specialization_name}</span>
							</p>
							<p className="text-stone400 py-0.5">
								Poziom: <span className="ml-2 font-medium">{course.level}</span>
							</p>
						</div>

						<div className="flex items-center justify-between text-xs sm:text-sm">
							<div className="flex items-center gap-1">
								<FaStar className="mb-0.5 text-yellow-500" />{' '}
								<p>
									<span>{course.average_rating || 0}</span>{' '}
									<span>
										({course.ratings_count > 0 ? `${course.ratings_count} ocen` : 'Brak ocen'})
									</span>
								</p>
							</div>

							<div className="flex items-center gap-1">
								<CiBank className="mb-0.5 size-4" />
								<p>{course.platform}</p>
							</div>
							<div className="flex items-center gap-1">
								<FaHeart className="mb-0.5 size-4 text-primary" />
								<p>{course.likes_count || 0}</p>
							</div>
						</div>
					</div>
				</Link>
			)}
		</>
	)
}

export default CourseCardPanel
