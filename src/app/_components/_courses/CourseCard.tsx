import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { CiBank } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'

function CourseCard({
	i = 8,
	isMainPage = false,
	isList = false,
}: {
	i?: number
	isMainPage?: boolean
	isList?: boolean
}) {
	const name =
		'[2025] Kurs FullStack WebDeveloper od Podstaw do Mastera 73h plus jeszcze cos musimy dopisac zeby sprawedzić czy działa'

	return (
		<Link
			href="/kursy/programowanie"
			className={`relative flex justify-between overflow-hidden rounded-2xl border bg-white text-sm shadow-md shadow-stone-200 transition-all duration-300 hover:bg-slate-50 hover:shadow-primary ${
				isMainPage ? (i < 8 ? 'flex flex-shrink-0' : 'flex flex-shrink-0 2xl:hidden') : 'flex'
			} ${!isMainPage && isList ? 'w-full ' : 'h-[370px] max-w-[330px] flex-col'} `}>
			<div className="t-0 absolute right-0 rounded-bl-2xl bg-primary px-5 py-3 font-semibold text-white z-20">
				49,99 zł
			</div>
			<div
				className={`z-10 h-[200px] w-[330px] relative ${!isMainPage && isList ? 'rounded-2xl' : 'rounded-t-2xl'}`}>
				<Image
					src="/course.jpg"
					fill
					alt="course image"
					className={` object-cover ${!isMainPage && isList ? 'rounded-2xl' : 'rounded-t-2xl'}`}
				/>
			</div>
			<div
				className={`flex flex-1 flex-col justify-between rounded-b-2xl text-stone400 ${!isMainPage && isList ? 'px-6 py-3' : 'px-3 py-2'}`}>
				<h3
					className={`text-base font-semibold text-stone400 overflow-hidden overflow-ellipsis whitespace-normal line-clamp-2  ${!isMainPage && isList ? 'max-w-[70%]' : 'pr-2'} `}>
					{name}
				</h3>
				<p className="text-stone400 py-8">
					Poziom: <span className="ml-2">Początkujący</span>
				</p>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<FaStar className="mb-0.5 text-yellow-500" />{' '}
						<p>
							<span>4.6</span> <span>(125 ocen)</span>
						</p>
					</div>

					<div className="flex items-center gap-1">
						<CiBank className="mb-0.5 size-4" />
						<p>Udemy</p>
					</div>
					<div className="flex items-center gap-1">
						<FaHeart className="mb-0.5 size-4 text-primary" />
						<p>125</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CourseCard
