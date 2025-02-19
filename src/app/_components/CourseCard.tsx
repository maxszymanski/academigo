import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { CiBank } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'

function CourseCard({ i }: { i: number }) {
	return (
		<Link
			href="/kursy/programowanie"
			className={`w-[330] h-[320px] relative rounded-2xl overflow-hidden  text-sm flex justify-between flex-col bg-white flex-shrink-0 border hover:bg-slate-50 duration-300 transition-[background-color , shadow]  shadow-md shadow-stone-200 hover:shadow-primary   ${
				i < 8 ? 'block' : 'block 2xl:hidden'
			}`}>
			<div className="absolute bg-primary py-3 px-5 font-semibold  t-0 right-0 rounded-bl-2xl text-white">
				49,99 zł
			</div>
			<Image src="/course.jpg" height={200} width={330} alt="course image" className="rounded-t-2xl" />
			<div className=" rounded-b-2xl py-2 px-3 flex flex-col justify-between flex-1 text-stone400">
				<h3 className="font-semibold text-base  text-primary">Podstawy JavaScript od zera</h3>
				<p className="text-stone400 ">
					Poziom: <span className="ml-2">Początkujący</span>
				</p>

				<div className="flex items-center justify-between ">
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
						<FaHeart className="size-4 mb-0.5 text-primary" />
						<p>125</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CourseCard
