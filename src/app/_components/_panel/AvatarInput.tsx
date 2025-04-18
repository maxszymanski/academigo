import { ACCEPTED_IMAGE_TYPES, avatarType } from '@/app/_lib/validators'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Control, Controller, FieldError, UseFormClearErrors, UseFormSetError } from 'react-hook-form'

import DefaultUser from '@/assets/default-user.webp'

interface FileInputProps {
	name: string
	error?: FieldError | null
	message?: string | null
	disabled?: boolean
	children?: React.ReactNode
	defaultValue?: string | number
	control: Control<avatarType>
	setError: UseFormSetError<avatarType>
	clearErrors: UseFormClearErrors<avatarType>
	image: File | null | string
	setImage: React.Dispatch<React.SetStateAction<File | null | string>>
	editImg?: string
}

function PanelInput({
	error,
	message,

	defaultValue,
	control,
	setError,
	clearErrors,

	image,
	setImage,
	editImg,
}: FileInputProps) {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const [preview, setPreview] = useState<string | null>(editImg || null)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		if (!event.target.files) return
		const file = event.target.files[0]

		if (!file) {
			return
		}
		const isValidType = ACCEPTED_IMAGE_TYPES.includes(file.type)

		if (!isValidType) {
			setError('avatar', {
				type: 'manual',
				message: 'Nieprawidłowy format pliku',
			})
			setPreview(null)
			setImage(file)
			return
		}

		if (file) {
			setImage(file)
		} else {
			setImage(null)
		}
	}

	useEffect(() => {
		if (typeof image === 'string') return

		if (image && ACCEPTED_IMAGE_TYPES.includes(image.type)) {
			clearErrors('avatar')
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreview(reader.result as string)
			}
			reader.readAsDataURL(image)
		} else if (editImg) {
			return
		} else {
			setPreview(null)
		}
	}, [image, clearErrors, editImg])

	return (
		<div className={` flex flex-col w-full  md:max-w-md max-w-[330px] self-center`}>
			<div className="relative w-full flex flex-col  items-center justify-center">
				<Controller
					name="avatar"
					control={control}
					render={({ field }) => (
						<input
							{...field}
							type="file"
							id="avatar"
							name="avatar"
							className="hidden"
							accept="image/*"
							ref={fileInputRef}
							defaultValue={defaultValue}
							onChange={handleChange}
						/>
					)}
				/>

				<label
					className="relative w-full max-w-[200px]  h-[200px] md:max-w-80 md:h-80 overflow-hidden rounded-full block cursor-pointer mt-1 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300  hover:border-slate-400 after:contents-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:opacity-0 hover:after:opacity-100 hover:after:bg-slate-200/30 after:duration-300 after:transition-colors"
					htmlFor="avatar"
					tabIndex={1}>
					<Image
						src={preview || DefaultUser}
						fill
						alt="zdjecie podglądowe"
						className="object-cover"
						priority
					/>
				</label>
				{error && <span className="text-sm  text-red-500 mt-2 pl-1">{message}</span>}
			</div>
		</div>
	)
}

export default PanelInput
