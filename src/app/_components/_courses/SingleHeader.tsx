import { FaHeart, FaStar } from 'react-icons/fa'
import Button from '../_ui/Button'
import { CiBank } from 'react-icons/ci'
import { FullCourseDataType } from './CourseCardPanel'
import Image from 'next/image'
import { blurImage } from '@/app/utils/blurImage'
import { MdKeyboardArrowRight } from 'react-icons/md'

function SingleHeader({ course }: { course: FullCourseDataType }) {
	return (
		<header className="lg:bg-gradient-primary pt-12 md:pt-0 xl:py-4">
			<div className="w-full  max-w-[600px]  lg:container mx-auto pt-8  flex flex-col items-center overflow-x-hidden lg:px-6 2xl:px-20">
				<div className="flex w-full  pb-2  px-2 items-center text-primary overflow-x-auto sm:justify-center scrollbar-none lg:justify-start lg:text-second">
					<Button variant="search" restClass="" href={`/kursy?category=${course.categories}`}>
						{course.category_name}
					</Button>
					<span>
						<MdKeyboardArrowRight />
					</span>
					<Button
						variant="search"
						href={`/kursy?category=${course.categories}&subcategory=${course.sub_categories}`}>
						{course.sub_category_name}
					</Button>
					<span>
						<MdKeyboardArrowRight />
					</span>
					<Button
						variant="search"
						href={`/kursy?category=${course.categories}&subcategory=${course.sub_categories}&specialization=${course.specialization}`}>
						{course.specialization_name}
					</Button>
				</div>
				<div className="z-10 h-[220px] sm:h-[300px] w-full relative  lg:hidden max-w-[400px] sm:max-w-[600px] mt-2">
					<Image
						src={course.picture || '/course.jpg'}
						fill
						alt="course image"
						className={` object-cover sm:rounded-xl`}
						priority
						quality={70}
						placeholder="blur"
						blurDataURL={blurImage}
					/>
				</div>
			</div>
			<div className="container mx-auto flex h-full w-full flex-col items-center lg:items-start  px-4 text-center lg:flex-row  lg:px-6 xl:px-8 py-10 gap-12 lg:justify-evenly lg:pb-20 lg:pt-14">
				<div className="flex h-full w-full flex-col justify-center gap-4  text-center lg:text-second text-dark2 lg:w-1/2 lg:items-start  lg:text-left ">
					<h1 className="w-full text-2xl font-medium lg:font-extrabold leading-9 tracking-wide lg:text-3xl lg:leading-[50px] xl:text-4xl xl:leading-[65px] 2xl:text-[44px] 2xl:leading-[70px]">
						{course.title}
					</h1>
					<p className="text-sm xl:text-base 2xl:text-lg 2xl:leading-8">{course.short_description}</p>
					{course.author_name && (
						<div className="flex items-center gap-2 lg:mt-6 w-full justify-center lg:justify-start">
							<p>Autor:</p>
							{course.author_link && course.author_link ? (
								<Button variant="search" restClass="" href={course.author_link} target="_blank">
									{course.author_name}
								</Button>
							) : !course.author_link && course.author_name ? (
								<p className="text-primary font-medium tracking-wide text-sm sm:text-base  lg:text-second ">
									{course.author_name}
								</p>
							) : null}
						</div>
					)}
				</div>
				<div className=" flex flex-col gap-8 w-full md:max-w-80 xl:max-w-md md:gap-12 2xl:pt-2">
					<div className="flex items-end justify-evenly gap-10 lg:gap-16  text-dark2 w-full xl:text-lg 2xl:text-2xl">
						<div className="flex items-center gap-1 flex-col xl:gap-2">
							<FaStar className="mb-0.5 text-yellow-500 size-10 xl:size-14" />{' '}
							<p>
								<span>{course?.average_rating || 0} / 5</span>{' '}
							</p>
						</div>

						<div className="flex items-center flex-col  ">
							<CiBank className=" font-extralight size-12 xl:size-[72px] text-primary" />
							<p>{course?.platform || ''}</p>
						</div>
						<div className="flex items-center gap-1 flex-col xl:gap-2">
							<FaHeart className="mb-0.5 size-10 text-primary xl:size-14" />
							<p>{course?.likes_count || 0}</p>
						</div>
					</div>
					<div className="w-full flex items-center justify-center lg:block">
						<Button
							href={course.course_link}
							target="_blank"
							restClass="!py-3 px-6  lg:hidden max-w-md w-full">
							Odkryj kurs
						</Button>
						<Button
							href={course.course_link}
							target="_blank"
							variant="white"
							restClass="px-6 xl:text-xl xl:px-10 xl:py-5 max-w-md w-full hidden lg:flex">
							Odkryj kurs
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default SingleHeader
