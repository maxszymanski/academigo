'use client'
import { changePasswordSchema, ChangePasswordType } from '@/app/_lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import SettingsBox from './SettingsBox'
import PanelInput from '../_ui/PanelInput'
import Button from '../_ui/Button'
import Spinner from '../_ui/Spinner'
import { updatePassword } from '@/app/_actions/auth'
import LoadingPortal from '../_ui/LoadingPortal'

function PasswordForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ChangePasswordType>({
		resolver: zodResolver(changePasswordSchema),
	})

	const onSubmit: SubmitHandler<ChangePasswordType> = async data => {
		const result = await updatePassword(data)
		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Hasło zostało zaktualizowane')
		}
		reset()
	}

	return (
		<>
			{isSubmitting && <LoadingPortal information="Zmienianie hasła" />}
			<SettingsBox title="Zmień hasło">
				<form className="flex flex-col gap-4  w-full " onSubmit={handleSubmit(onSubmit)}>
					<PanelInput
						label="Nowe hasło"
						type="password"
						name="password"
						placeholder="Wpisz nowe hasło"
						formRegister={register('password')}
						error={errors?.password || null}
						message={errors?.password?.message || null}
						autoComplete="new-password"
					/>
					<PanelInput
						label="Powtórz hasło"
						type="password"
						name="confirmPassword"
						placeholder="Powtórz hasło"
						formRegister={register('confirmPassword')}
						error={errors?.confirmPassword || null}
						message={errors?.confirmPassword?.message || null}
						autoComplete="new-password"
					/>
					<div className="px-8 w-full flex items-center justify-center pt-4">
						<Button variant="submit" restClass="relative" disabled={isSubmitting}>
							Zapisz
							{isSubmitting && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
						</Button>
					</div>
				</form>
			</SettingsBox>
		</>
	)
}

export default PasswordForm
