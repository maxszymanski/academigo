import Image from 'next/image'
import Link from 'next/link'
import DefaultUser from '@/assets/default-user.webp'
import { blurImage } from '@/app/utils/blurImage'

function UserAvatar({
	avatar,
	size = '',
	href,
	target = '_self',
}: {
	avatar?: string | null
	size?: string
	href?: string | null
	target?: string
}) {
	return (
		<Link
			href={href || '/_next/static/media/default-user.ba8b4d6e.webp'}
			className="hover:border-primary focus:border-primary border border-transparent rounded-full tranistion-color duration-300 block flex-shrink-0"
			target={target}
			rel="noopener noreferrer">
			<Image
				priority
				src={avatar ? avatar : DefaultUser}
				width={44}
				height={44}
				className={`  rounded-full  object-cover ${size != '' ? size : 'h-[42px] w-[42px] xl:h-11 xl:w-11'}   `}
				alt="zdjęcie użytkownika"
				placeholder="blur"
				blurDataURL={blurImage}
			/>
		</Link>
	)
}

export default UserAvatar
