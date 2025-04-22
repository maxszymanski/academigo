'use client'
import PanelInput from '../_ui/PanelInput'
import SettingsBox from './SettingsBox'
import Button from '../_ui/Button'
import { CurrentUserType } from '@/app/_types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { updateSocialSchema, UpdateSocialType } from '@/app/_lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import Spinner from '../_ui/Spinner'

import toast from 'react-hot-toast'
import LoadingPortal from '../_ui/LoadingPortal'
import { UpdateSocials } from '@/app/_actions/mutations'

function SocialForm({ user }: { user: CurrentUserType }) {
	const {
		register,
		handleSubmit,

		formState: { errors, isSubmitting },
	} = useForm<UpdateSocialType>({
		resolver: zodResolver(updateSocialSchema),
	})

	const onSubmit: SubmitHandler<UpdateSocialType> = async data => {
		const result = await UpdateSocials(data)
		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Dane zostały zaktualizowane')
		}
	}

	return (
		<SettingsBox title="Social Media">
			{isSubmitting && <LoadingPortal information="Aktualizowanie danych" />}
			<form className="flex flex-col gap-5 w-full " onSubmit={handleSubmit(onSubmit)}>
				<PanelInput
					label="Strona internetowa"
					name="page"
					placeholder="Strona internetowa"
					defaultValue={user?.page || ''}
					formRegister={register('page')}
					error={errors?.page || null}
					message={errors?.page?.message || null}
				/>
				<PanelInput
					label="Konto LinkedIn"
					name="linkedin"
					placeholder="Konto LinkedIn"
					defaultValue={user?.linkedin || ''}
					formRegister={register('linkedin')}
					error={errors?.linkedin || null}
					message={errors?.linkedin?.message || null}
				/>
				<PanelInput
					label="Konto GitHub"
					name="github"
					placeholder="Konto Github"
					defaultValue={user?.github || ''}
					formRegister={register('github')}
					error={errors?.github || null}
					message={errors?.github?.message || null}
				/>
				<PanelInput
					label="Konto społecznościowe"
					name="social"
					placeholder="Konto społecznościowe"
					defaultValue={user?.social || ''}
					formRegister={register('social')}
					error={errors?.social || null}
					message={errors?.social?.message || null}
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

export default SocialForm
