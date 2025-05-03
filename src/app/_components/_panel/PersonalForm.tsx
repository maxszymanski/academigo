'use client'
import { countryOptions } from '@/app/utils/countries'
import CustomSelect from '../_ui/CustomSelect'
import PanelInput from '../_ui/PanelInput'
import SettingsBox from './SettingsBox'
import Button from '../_ui/Button'
import { CurrentUserType } from '@/app/_types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { updatePersonalDataSchema, UpdatePersonalDataType } from '@/app/_lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import Spinner from '../_ui/Spinner'
import { UpdatePersonalUserData } from '@/app/_actions/mutations'
import toast from 'react-hot-toast'
import LoadingPortal from '../_ui/LoadingPortal'

function PersonalForm({ genders, user }: { genders: string[]; user: CurrentUserType }) {
	const {
		register,
		handleSubmit,

		formState: { errors, isSubmitting },
	} = useForm<UpdatePersonalDataType>({
		resolver: zodResolver(updatePersonalDataSchema),
	})

	const onSubmit: SubmitHandler<UpdatePersonalDataType> = async data => {
		const result = await UpdatePersonalUserData(data)

		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Dane zostały zaktualizowane')
		}
	}

	return (
		<SettingsBox title="Dane osobowe">
			{isSubmitting && <LoadingPortal information="Aktualizowanie danych" />}
			<form className="flex flex-col gap-5  w-full md:max-w-md" onSubmit={handleSubmit(onSubmit)}>
				<PanelInput
					label="Imię"
					name="username"
					placeholder="Podaj Imię i nazwisko"
					defaultValue={user.username}
					required
					formRegister={register('username')}
					error={errors?.username || null}
					message={errors?.username?.message || null}
				/>
				<PanelInput
					label="Krótki opis"
					name="short_description"
					placeholder="Krótki opis"
					defaultValue={user?.short_description || ''}
					formRegister={register('short_description')}
					error={errors?.short_description || null}
					message={errors?.short_description?.message || null}
				/>
				<PanelInput
					label="Wiek"
					name="age"
					placeholder="Wprowadź swój wiek"
					defaultValue={user?.age || ''}
					formRegister={register('age')}
					type="number"
					min={1}
					max={130}
				/>
				<CustomSelect
					optionsData={genders}
					label="Płeć"
					defaultOption="Wybierz płeć"
					defaultValue={user?.gender || ''}
					name="gender"
					formRegister={register('gender')}
					required
				/>
				<CustomSelect
					optionsData={countryOptions}
					label="Kraj"
					defaultOption="Wybierz kraj"
					name="country"
					defaultValue={user?.country || 'Polska'}
					required
					formRegister={register('country')}
					error={errors?.country || null}
					message={errors?.country?.message || null}
				/>
				<PanelInput
					label="Miasto"
					name="city"
					placeholder="Wpisz nazwę miasta"
					defaultValue={user?.city || ''}
					formRegister={register('city')}
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

export default PersonalForm
