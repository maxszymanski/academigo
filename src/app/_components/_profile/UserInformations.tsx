import { CurrentUserType } from '@/app/_types/types'
import Link from 'next/link'
// import { format } from 'date-fns'
// import { pl } from 'date-fns/locale'

import { FaCity, FaGithub, FaLinkedin, FaLocationDot, FaUserGraduate, FaUserTie } from 'react-icons/fa6'
import { MdMail, MdWork } from 'react-icons/md'
import { FaGlobe } from 'react-icons/fa'
import { TbSocial } from 'react-icons/tb'

function UserInformations({ user, isGender }: { user: CurrentUserType; isGender?: boolean }) {
	function cleanUrl(url: string): string {
		return url
			.toLocaleLowerCase()
			.replace(/^https?:\/\/(www\.)?/, '')
			.replace(/\/$/, '')
	}

	const ageFormat =
		user.age == '1' ? 'rok' : user.age === '2' || user.age === '3' || user.age === '4' ? 'lata' : 'lat'

	return (
		<div className="flex flex-col  ">
			<div className="hidden flex-col md:flex mb-6">
				<h1 className="text-primary font-medium md:text-2xl xl:text-4xl">{user.username}</h1>
				<p className="text-dark2/75 md:text-base  xl:mt-0.5">
					{isGender ? user.gender : ''} {isGender && user.age && ', '}{' '}
					{user?.age && `${user.age} ${ageFormat}`}
				</p>
			</div>
			{user.short_description && (
				<p className="text-dark2/95  text-base md:text-lg font-medium pr-2 max-w-[400px]  xl:text-xl xl:max-w-md">
					{user.short_description}
				</p>
			)}
			<div className="flex flex-col gap-2.5 pt-5 text-dark2/75">
				{(user.city || user.country) && (
					<div className="flex items-center gap-10 text-sm pb-2 text-dark2/75 md:text-base">
						{user.city && (
							<p className="flex items-center gap-2  ">
								<FaCity className="size-4" /> <span>{user?.city} </span>
							</p>
						)}
						{user.country && (
							<p className="flex items-center gap-1 ">
								<FaLocationDot className="size-4" /> <span>{user?.country} </span>
							</p>
						)}
					</div>
				)}
				{user.role && (
					<p className="flex items-center gap-2 ">
						{user.role === 'Student' ? (
							<FaUserGraduate className="size-4" />
						) : user.role === 'Instruktor' ? (
							<FaUserTie className="size-4" />
						) : null}{' '}
						<span>{user.role} </span>
					</p>
				)}
				{user.profession && (
					<p className="flex items-center gap-2 ">
						<MdWork className="size-4" /> <span>{user.profession} </span>
					</p>
				)}
				{user.contact_email && (
					<Link
						className="flex items-center gap-2 hover:text-primary transition-colors duration-300 text-dark2"
						href={`mailto:${user.contact_email}` || '/'}
						target="_blanc"
						rel="noreferrer noopener">
						<MdMail className="size-4 text-dark2/75" />{' '}
						<span className="font-medium ">{user.contact_email.toLowerCase()} </span>
					</Link>
				)}
				{user.page && (
					<Link
						className="flex items-center gap-2 hover:text-primary transition-colors duration-300  text-dark2 "
						href={user.page || '/'}
						target="_blanc"
						rel="noreferrer noopener">
						<FaGlobe className="size-4 text-dark2/75" />{' '}
						<span className="font-medium ">{cleanUrl(user.page)} </span>
					</Link>
				)}
				{user.linkedin && (
					<Link
						className="flex items-center gap-2 hover:text-primary transition-colors duration-300   text-dark2"
						href={user.linkedin || '/'}
						target="_blanc"
						rel="noreferrer noopener">
						<FaLinkedin className="size-4 text-dark2/75" />{' '}
						<span className="font-medium ">{cleanUrl(user.linkedin)} </span>
					</Link>
				)}
				{user.github && (
					<Link
						className="flex items-center gap-2 hover:text-primary transition-colors duration-300  text-dark2 "
						href={user.github || '/'}
						target="_blanc"
						rel="noreferrer noopener">
						<FaGithub className="size-4 text-dark2/75" />{' '}
						<span className="font-medium ">{cleanUrl(user.github)} </span>
					</Link>
				)}
				{user.social && (
					<Link
						className="flex items-center gap-2 hover:text-primary transition-colors duration-300  text-dark2 "
						href={user.social || '/'}
						target="_blanc"
						rel="noreferrer noopener">
						<TbSocial className="size-4 text-dark2/75" />{' '}
						<span className="font-medium ">{cleanUrl(user.social)} </span>
					</Link>
				)}
			</div>
		</div>
	)
}

export default UserInformations
