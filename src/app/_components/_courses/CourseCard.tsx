import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { CiBank } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'

function CourseCard({ i }: { i: number }) {
    return (
        <Link
            href="/kursy/programowanie"
            className={`transition-[background-color , shadow] relative flex h-[320px] w-[330] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border bg-white text-sm shadow-md shadow-stone-200 duration-300 hover:bg-slate-50 hover:shadow-primary ${
                i < 8 ? 'block' : 'block 2xl:hidden'
            }`}
        >
            <div className="t-0 absolute right-0 rounded-bl-2xl bg-primary px-5 py-3 font-semibold text-white">
                49,99 zł
            </div>
            <Image
                src="/course.jpg"
                height={200}
                width={330}
                alt="course image"
                className="rounded-t-2xl"
            />
            <div className="flex flex-1 flex-col justify-between rounded-b-2xl px-3 py-2 text-stone400">
                <h3 className="text-base font-semibold text-primary">
                    Podstawy JavaScript od zera
                </h3>
                <p className="text-stone400">
                    Poziom: <span className="ml-2">Początkujący</span>
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <FaStar className="mb-1 text-yellow-500" />{' '}
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
