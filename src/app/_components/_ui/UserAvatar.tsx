import Image from 'next/image'
import Link from 'next/link'
import DefaultUser from '@/assets/default-user.webp'

function UserAvatar({ avatar }: { avatar?: string | null }) {
	return (
		<Link
			href="/konto/ustawienia"
			className="hover:border-primary focus:border-primary border-2 border-primary2 rounded-full tranistion-color">
			<Image
				priority
				src={avatar ? avatar : DefaultUser}
				width={44}
				height={44}
				className=" h-[42px] w-[42px] rounded-full  object-cover   xl:h-11 xl:w-11 "
				alt="zdjęcie użytkownika"
			/>
		</Link>
	)
}

export default UserAvatar
