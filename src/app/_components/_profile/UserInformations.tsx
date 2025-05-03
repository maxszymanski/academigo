import { CurrentUserType } from '@/app/_types/types'
import Link from 'next/link'
// import { format } from 'date-fns'
// import { pl } from 'date-fns/locale'

import { FaCity, FaGithub, FaLinkedin, FaLocationDot, FaUserGraduate, FaUserTie } from 'react-icons/fa6'
import { MdMail, MdWork } from 'react-icons/md'
import { FaGlobe } from 'react-icons/fa'
import { TbSocial } from 'react-icons/tb'

function UserInformations({ user }: { user: CurrentUserType }) {
	// const userCreated = format(new Date(user.created_at), 'd MMMM yyyy', { locale: pl })
	function cleanUrl(url: string): string {
		return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
	}

	return (
		<div className="flex flex-col gap-2.5 text-dark2/75">
			{(user.city || user.country) && (
				<div className="flex items-center gap-10 text-sm pb-2 text-dark2/75">
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
				<p className="flex items-center gap-2 text-sm">
					{user.role === 'Student' ? (
						<FaUserGraduate className="size-4" />
					) : user.role === 'Instruktor' ? (
						<FaUserTie className="size-4" />
					) : null}{' '}
					<span>{user.role} </span>
				</p>
			)}
			{user.profession && (
				<p className="flex items-center gap-2 text-sm">
					<MdWork className="size-4" /> <span>{user.profession} </span>
				</p>
			)}
			<Link
				className="flex items-center gap-2 text-sm  "
				href={`mailto:${user.email}` || '/'}
				target="_blanc"
				rel="noreferrer noopener">
				<MdMail className="size-4" /> <span className="font-medium text-dark2">{user.email} </span>
			</Link>
			{user.page && (
				<Link
					className="flex items-center gap-2 text-sm  "
					href={user.page || '/'}
					target="_blanc"
					rel="noreferrer noopener">
					<FaGlobe className="size-4" />{' '}
					<span className="font-medium text-dark2">{cleanUrl(user.page)} </span>
				</Link>
			)}
			{user.linkedin && (
				<Link
					className="flex items-center gap-2 text-sm  "
					href={user.linkedin || '/'}
					target="_blanc"
					rel="noreferrer noopener">
					<FaLinkedin className="size-4" />{' '}
					<span className="font-medium text-dark2">{cleanUrl(user.linkedin)} </span>
				</Link>
			)}
			{user.github && (
				<Link
					className="flex items-center gap-2 text-sm  "
					href={user.github || '/'}
					target="_blanc"
					rel="noreferrer noopener">
					<FaGithub className="size-4" />{' '}
					<span className="font-medium text-dark2">{cleanUrl(user.github)} </span>
				</Link>
			)}
			{user.social && (
				<Link
					className="flex items-center gap-2 text-sm  "
					href={user.social || '/'}
					target="_blanc"
					rel="noreferrer noopener">
					<TbSocial className="size-4" />{' '}
					<span className="font-medium text-dark2">{cleanUrl(user.social)} </span>
				</Link>
			)}
		</div>
	)
}

export default UserInformations
