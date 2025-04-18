'use client'

import SettingsBox from './SettingsBox'
import Button from '../_ui/Button'
import { CurrentUserType } from '@/app/_types/types'
import { FieldError, SubmitHandler, useForm } from 'react-hook-form'
import { ACCEPTED_IMAGE_TYPES, avatarSchema, avatarType, MAX_FILE_SIZE } from '@/app/_lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import Spinner from '../_ui/Spinner'
import AvatarInput from './AvatarInput'
import toast from 'react-hot-toast'
import LoadingPortal from '../_ui/LoadingPortal'

import { useState } from 'react'
import { updateAvatar } from '@/app/_actions/mutations'

function AvatarForm({ user }: { user: CurrentUserType }) {
	const {
		handleSubmit,
		control,
		setError,
		clearErrors,

		formState: { errors, isSubmitting },
	} = useForm<avatarType>({
		resolver: zodResolver(avatarSchema),
	})

	const [image, setImage] = useState<File | null | string>(user.avatar)

	const onSubmit: SubmitHandler<avatarType> = async data => {
		if (!image) {
			setError('avatar', {
				type: 'manual',
				message: 'Plik jest wymagany',
			})
			toast.error('Plik jest wymagany')
			return
		}

		const isValidType = typeof image === 'string' || ACCEPTED_IMAGE_TYPES.includes(image.type)

		const isValidSize = image == user.avatar || (typeof image != 'string' && image?.size < MAX_FILE_SIZE)

		if (!isValidType) {
			setError('avatar', {
				type: 'manual',
				message: 'Nieprawidłowy format pliku',
			})
			toast.error('Nieprawidłowy format pliku')
			return
		}

		if (!isValidSize) {
			setError('avatar', {
				type: 'manual',
				message: 'Plik musi być mniejszy niż 2MB',
			})
			toast.error('Plik musi być mniejszy niż 2MB')
			return
		}

		if (image && isValidType && isValidSize) {
			clearErrors('avatar')
			data.avatar = image
		}

		const formData = new FormData()

		formData.append('avatar', image)

		const result = await updateAvatar(formData)

		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Avatar został zaktualizowany')
		}
	}

	return (
		<SettingsBox title="Zdjęcie profilowe">
			{isSubmitting && <LoadingPortal information="Aktualizowanie danych" />}
			<form className="flex flex-col gap-5  w-full " onSubmit={handleSubmit(onSubmit)}>
				<AvatarInput
					name="avatar"
					image={image}
					setImage={setImage}
					control={control}
					setError={setError}
					clearErrors={clearErrors}
					error={errors?.avatar as FieldError | null}
					message={typeof errors?.avatar?.message === 'string' ? errors.avatar.message : null}
					editImg={user.avatar}
				/>

				<div className="px-8 w-full flex items-center justify-center pt-4">
					<Button variant="submit" restClass="relative" disabled={isSubmitting}>
						Zapisz
						{isSubmitting && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
					</Button>
				</div>
			</form>
		</SettingsBox>
	)
}

export default AvatarForm
