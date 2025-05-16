'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../_ui/Button'
import Input from '../_ui/Input'
import Spinner from '../_ui/Spinner'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetSchema, ResetType } from '@/app/_lib/validators'
import { resetPassword } from '@/app/_actions/auth'
import toast from 'react-hot-toast'

function ResetPassword() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ResetType>({ resolver: zodResolver(resetSchema) })

	const onSubmit: SubmitHandler<ResetType> = async data => {
		const formData = new FormData()

		for (const key in data) {
			formData.append(key, data[key as keyof ResetType] as string)
		}

		const result = await resetPassword(formData)
		if (result?.error) {
			toast.error(result?.error)
		} else {
			reset()
			toast.success('Na podany adres email został wysłany link do przypomnienia hasła.')
		}
	}

	return (
		<main className="flex-1 flex-grow flex flex-col items-center justify-center">
			<form className="flex  flex-col justify-center " onSubmit={handleSubmit(onSubmit)}>
				<div className="text-center font-bold text-white lg:px-2 ">
					<h1 className="mb-3 text-3xl md:text-4xl lg:text-5xl xl:mb-6 2xl:text-6xl  lg:leading-[140%] 2xl:leading-[140%]">
						Przypomnij hasło
					</h1>
					<p className="text-sm font-normal text-white/70">Wprowadź swój adres email</p>
				</div>
				<div className="flex flex-col items-start gap-6 pt-14 pb-20">
					<Input
						type="email"
						name="email"
						placeholder="Email"
						formRegister={register('email')}
						error={errors?.email || null}
						message={errors?.email?.message || null}
						disabled={isSubmitting}
					/>
					<div className="w-full px-16">
						<Button
							variant="purple"
							restClass="w-full py-3 rounded-lg xl:!text-base xl:!py-3 "
							disabled={isSubmitting}>
							{isSubmitting ? 'Wysyłanie' : 'Wyślij'}{' '}
							{isSubmitting && <Spinner restClass="ml-6 absolute right-3 sm:right-8" />}
						</Button>
					</div>
				</div>
			</form>
			<div className="hidden lg:flex w-full  flex-col items-center justify-center gap-6 pb-8 px-16">
				<Button variant="purple" href="/panel/zaloguj-sie" restClass="rounded-lg w-full">
					Zaloguj się
				</Button>
				<Button variant="dark" href="/panel/rejestracja" restClass="rounded-lg w-full">
					Zarejestruj się
				</Button>
			</div>
		</main>
	)
}

export default ResetPassword
