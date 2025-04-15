import Image from 'next/image'
import Link from 'next/link'
import DefaultUser from '@/assets/default-user.webp'

function UserAvatar({ avatar, small = false }: { avatar?: string | null; small?: boolean }) {
	return (
		<Link
			href="/konto/ustawienia"
			className="hover:border-primary focus:border-primary border-2 border-primary2 rounded-full tranistion-color duration-300">
			<Image
				priority
				src={avatar ? avatar : DefaultUser}
				width={44}
				height={44}
				className={`  rounded-full  object-cover ${small ? 'h-6 w-6' : 'h-[42px] w-[42px] xl:h-11 xl:w-11'}   `}
				alt="zdjęcie użytkownika"
			/>
		</Link>
	)
}

export default UserAvatar
