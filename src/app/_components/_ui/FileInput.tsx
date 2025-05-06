import { ACCEPTED_IMAGE_TYPES, AddCourseType } from '@/app/_lib/validators'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Control, Controller, FieldError, UseFormClearErrors, UseFormSetError } from 'react-hook-form'
import { FaCamera } from 'react-icons/fa'
import CourseCropModal from './CourseCropModal'
import useAppStore from '@/app/stores/store'
import { Area } from 'react-easy-crop'
import { getCroppedImg } from '@/app/utils/cropImage'

interface FileInputProps {
	name: string
	error?: FieldError | null
	message?: string | null
	disabled?: boolean
	children?: React.ReactNode
	defaultValue?: string | number
	control: Control<AddCourseType>
	setError: UseFormSetError<AddCourseType>
	clearErrors: UseFormClearErrors<AddCourseType>
	image: File | null | string
	setImage: React.Dispatch<React.SetStateAction<File | null | string>>
	editImg?: string
}

function PanelInput({
	error,
	message,
	disabled,
	defaultValue,
	control,
	setError,
	clearErrors,
	name,
	image,
	setImage,
	editImg,
}: FileInputProps) {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const [preview, setPreview] = useState<string | null>(editImg || null)
	const [showCropper, setShowCropper] = useState(false)

	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleChange = (croppedArea: Area, croppedAreaPixels: Area) => {
		setCroppedAreaPixels(croppedAreaPixels)
	}

	const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		if (!event.target.files) return
		const file = event.target.files[0]

		if (!file) {
			return
		}
		const isValidType = ACCEPTED_IMAGE_TYPES.includes(file.type)

		if (!isValidType) {
			setError('picture', {
				type: 'manual',
				message: 'Nieprawidłowy format pliku',
			})

			return
		}

		if (file) {
			setImage(file)
			setShowCropper(true)
			setOpenModal('course-crop-modal')
		} else {
			setImage(null)
		}
		event.target.value = ''
	}

	useEffect(() => {
		if (typeof image === 'string') return

		if (image && ACCEPTED_IMAGE_TYPES.includes(image.type)) {
			clearErrors('picture')
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

	const handleCloseCourseModal = () => {
		setPreview(editImg || null)
		closeModal()
		setImage(editImg || null)
		setShowCropper(false)
	}

	const showCroppedImage = async () => {
		try {
			const croppedImage = await getCroppedImg(preview, croppedAreaPixels)
			setImage(croppedImage)
			closeModal()
			setShowCropper(false)
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<div className={` flex flex-col w-full  md:max-w-md max-w-[330px] self-center`}>
			<div>
				<label htmlFor={name} className={`block text-dark2 mb-1`}>
					Obraz kursu <span className="text-red-400">*</span>
				</label>
			</div>
			{preview && showCropper && (
				<CourseCropModal
					handleChange={handleChange}
					preview={preview}
					handleCloseAvatarModal={handleCloseCourseModal}
					showCroppedImage={showCroppedImage}
					crop={crop}
					setCrop={setCrop}
				/>
			)}
			<div className="relative w-full md:w-fit">
				<Controller
					name="picture"
					control={control}
					render={({ field }) => (
						<input
							{...field}
							type="file"
							id={name}
							name={name}
							className={`rounded-lg mt-1 text-sm px-5 py-3.5 border  bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500 h-[200px] w-full max-w-[330px] cursor-pointer flex items-center justify-center} ${!!preview ? 'hidden' : ''} ${error ? 'border-red-500' : 'border-slate-200'}`}
							accept="image/*"
							ref={fileInputRef}
							disabled={disabled}
							defaultValue={defaultValue}
							onChange={handleChangeFile}
						/>
					)}
				/>

				{preview && (
					<label
						className="relative w-full max-w-[330px] md:w-[330px] h-[200px] overflow-hidden rounded-lg block cursor-pointer mt-1 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300  hover:border-slate-400 after:contents-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:opacity-0 hover:after:opacity-100 hover:after:bg-slate-200/30 after:duration-300 after:transition-colors"
						htmlFor="picture"
						tabIndex={1}>
						<Image src={preview || '/'} fill alt="zdjecie podglądowe" className="object-cover" priority />
					</label>
				)}
				{!preview && (
					<FaCamera className="absolute top-1/2 size-14 text-slate-400 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
				)}
				{error && <span className="text-sm  text-red-500 mt-2 pl-1">{message}</span>}
			</div>
		</div>
	)
}

export default PanelInput
