'use client'

import SettingsBox from './SettingsBox'
import Button from '../_ui/Button'
import { CurrentUserType } from '@/app/_types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UpdateUserDescription, updateUserDescriptionSchema } from '@/app/_lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import Spinner from '../_ui/Spinner'

import toast from 'react-hot-toast'
import LoadingPortal from '../_ui/LoadingPortal'
import { UpdateDescription } from '@/app/_actions/mutations'

import { useState } from 'react'
import EditorUserDescription from './EditorUserDescription'

function AboutMeDescription({ user }: { user: CurrentUserType }) {
	const {
		control,
		handleSubmit,
		setError,
		clearErrors,
		formState: { errors, isSubmitting },
	} = useForm<UpdateUserDescription>({
		resolver: zodResolver(updateUserDescriptionSchema),
		defaultValues: {
			long_description: user?.long_description || '',
		},
	})
	const [content, setContent] = useState(user.long_description || '')

	const onSubmit: SubmitHandler<UpdateUserDescription> = async data => {
		if (content.length < 50) {
			setError('long_description', {
				type: 'manual',
				message: 'Opis musi być dłuższy niż 50 znaków',
			})
			return
		}
		data.long_description = content

		const result = await UpdateDescription(data)
		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Dane zostały zaktualizowane')
			clearErrors('long_description')
		}
	}

	return (
		<SettingsBox title="O mnie" long>
			{isSubmitting && <LoadingPortal information="Aktualizowanie danych" />}
			<form className="flex flex-col gap-5  w-full w-xl" onSubmit={handleSubmit(onSubmit)}>
				<EditorUserDescription
					control={control}
					setContent={setContent}
					error={errors?.long_description}
					message={errors?.long_description?.message}
					placeholder="Wprowadz swój opis użytkownika"
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

export default AboutMeDescription
