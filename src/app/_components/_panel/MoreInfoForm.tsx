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

const accountType = ['Uczeń', 'Nauczyciel']

function MoreInfoForm({ user }: { user: CurrentUserType }) {
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
		<SettingsBox title="Dodatkowe dane">
			{isSubmitting && <LoadingPortal information="Aktualizowanie danych" />}
			<form className="flex flex-col gap-5  w-full md:max-w-md" onSubmit={handleSubmit(onSubmit)}>
				<CustomSelect
					optionsData={accountType}
					label="Rola na platformie"
					defaultOption="Wybierz rolę"
					defaultValue={user?.role || ''}
					name="role"
					formRegister={register('role')}
				/>
				<PanelInput
					label="Zawód"
					name="proffesion"
					placeholder="Podaj swój zawód"
					defaultValue={user.proffesion}
					formRegister={register('proffesion')}
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

export default MoreInfoForm
