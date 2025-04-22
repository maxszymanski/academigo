import { FaHeart, FaStar } from 'react-icons/fa'
import Button from '../_ui/Button'
import { CiBank } from 'react-icons/ci'
import { FullCourseDataType } from './CourseCardPanel'

function SingleHeader({ course }: { course: FullCourseDataType }) {
	return (
		<header className="bg-gradient-primary pt-12 md:pt-0">
			<div className="container mx-auto flex h-full w-full flex-col items-center md:items-start  px-4 text-center md:flex-row  lg:px-6 xl:px-8 py-16 gap-12 lg:justify-evenly lg:py-20 xl:py-24 2xl:py-32">
				<div className="flex h-full w-full flex-col justify-center gap-4  text-center text-second md:w-1/2 md:items-start  md:text-left ">
					<h1 className="w-full text-2xl font-extrabold leading-9 tracking-wide lg:text-3xl lg:leading-[50px] xl:text-4xl xl:leading-[65px] 2xl:text-[44px] 2xl:leading-[80px]">
						Podstawy programu Excel do analizy danych
					</h1>
					<p className="text-sm xl:text-base">Stań się ekspertem w programie Excel</p>
				</div>
				<div className=" flex flex-col gap-8 w-full md:max-w-80 xl:max-w-md md:gap-12 2xl:pt-2">
					<div className="flex items-center justify-evenly gap-10 lg:gap-16  text-dark2 w-full xl:text-lg 2xl:text-2xl">
						<div className="flex items-center gap-1 flex-col xl:gap-2">
							<FaStar className="mb-0.5 text-yellow-500 size-10 xl:size-14" />{' '}
							<p>
								<span>{course?.average_rating || 0}</span>{' '}
								{/* <span className="font-extralight">
									({course?.ratings_count > 0 ? `${course?.ratings_count} ocen` : 'Brak ocen'})
								</span> */}
							</p>
						</div>

						<div className="flex items-center gap-1 flex-col xl:gap-2">
							<CiBank className="mb-0.5 font-extralight size-10 xl:size-14" />
							<p>{course?.platform || 'Udemy'}</p>
						</div>
						<div className="flex items-center gap-1 flex-col xl:gap-2">
							<FaHeart className="mb-0.5 size-10 text-primary xl:size-14" />
							<p>{course?.likes_count || 0}</p>
						</div>
					</div>
					<div className="w-full flex items-center justify-center md:block">
						<Button
							href="/https://udemy.com"
							variant="white"
							restClass="px-6 xl:text-xl xl:px-10 xl:py-5 max-w-md w-full">
							Odkryj kurs
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default SingleHeader
