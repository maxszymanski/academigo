import Image from 'next/image'
import DefaultUser from '@/assets/default-user.webp'
import { blurImage } from '@/app/utils/blurImage'

function UserImage({ avatar, size = '' }: { avatar?: string | null; size?: string }) {
	return (
		<div className="border border-transparent block flex-shrink-0">
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
		</div>
	)
}

export default UserImage
