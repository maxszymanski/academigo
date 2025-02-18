import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { CiBank } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'

function CourseCard() {
	return (
		<Link
			href="/kursy/programowanie"
			className="w-[330] h-[300px] relative rounded-2xl overflow-hidden text-white text-sm flex justify-between flex-col bg-primary flex-shrink-0">
			<div className="absolute bg-primary py-3 px-5 font-semibold  t-0 right-0 rounded-bl-2xl">49,99 zł</div>
			<Image src="/course.jpg" height={200} width={330} alt="course image" className="rounded-t-2xl" />
			<div className=" rounded-b-2xl py-2 px-3 flex flex-col justify-between flex-1">
				<h3 className="font-bold text-base mb-1">Podstawy JavaScript od zera</h3>
				<p className="text-stone-200 ">
					Poziom: <span className="ml-2">Początkujący</span>
				</p>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<FaStar className="text-yellow-500 mb-1" />{' '}
						<p>
							<span>4.6</span> <span>(125 ocen)</span>
						</p>
					</div>

					<div className="flex items-center gap-1">
						<CiBank className="size-4 mb-0.5" />
						<p>Udemy</p>
					</div>
					<div className="flex items-center gap-1">
						<FaHeart className="size-4 mb-0.5" />
						<p>125</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CourseCard
