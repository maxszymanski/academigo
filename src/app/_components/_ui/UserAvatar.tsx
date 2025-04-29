import Image from 'next/image'
import Link from 'next/link'
import DefaultUser from '@/assets/default-user.webp'

function UserAvatar({ avatar, size = '', href }: { avatar?: string | null; size?: string; href: string }) {
	return (
		<Link
			href={href}
			className="hover:border-primary focus:border-primary border-2 border-primary2 rounded-full tranistion-color duration-300 block">
			<Image
				priority
				src={avatar ? avatar : DefaultUser}
				width={44}
				height={44}
				className={`  rounded-full  object-cover ${size != '' ? size : 'h-[42px] w-[42px] xl:h-11 xl:w-11'}   `}
				alt="zdjęcie użytkownika"
			/>
		</Link>
	)
}

export default UserAvatar
