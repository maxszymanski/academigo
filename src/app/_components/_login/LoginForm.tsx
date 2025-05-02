'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Input from '../_ui/Input'
import Button from '../_ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { login } from '../../_actions/auth'
import GoogleButton from '../_ui/GoogleButton'
import Spinner from '../_ui/Spinner'
import { loginSchema, LoginType } from '@/app/_lib/validators'

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<LoginType>({ resolver: zodResolver(loginSchema) })
	const [error, setError] = useState<string | null>(null)

	const onSubmit: SubmitHandler<LoginType> = async data => {
		const formData = new FormData()

		for (const key in data) {
			formData.append(key, data[key as keyof LoginType] as string)
		}

		const result = await login(formData)
		if (result?.error) {
			setError(result.error)
			reset()
		}
	}

	return (
		<>
			<form className="flex flex-1 flex-grow flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
				<div className="text-center font-bold text-white lg:px-2 lg:text-left">
					<h3 className="mb-3 text-3xl md:text-4xl lg:text-5xl xl:mb-6 2xl:text-6xl">Zaloguj się</h3>
					<p className="text-sm font-normal text-white/70">Wprowadź dane swojego konta</p>
				</div>
				<div className="flex flex-col items-start gap-3 py-8">
					<Input
						type="email"
						name="email"
						placeholder="Email"
						formRegister={register('email')}
						error={errors?.email || error || null}
						message={errors?.email?.message || null}
						disabled={isSubmitting}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Hasło"
						formRegister={register('password')}
						error={errors?.password || null}
						message={errors?.password?.message || null}
						disabled={isSubmitting}
					/>
					{error && <span className="text-xs font-light text-red-500 mt-2 pl-2">{error}</span>}
					<Button href="/resetowanie-hasla" restClass="text-xs mt-2 px-2 py-2" variant="transparent">
						Zapomniałeś hasła?
					</Button>
				</div>
				<Button
					variant="purple"
					restClass="w-full py-3 rounded-lg xl:!text-base xl:!py-3"
					disabled={isSubmitting}>
					{isSubmitting ? 'Logowanie' : 'Zaloguj się'}{' '}
					{isSubmitting && <Spinner restClass="ml-6 absolute right-3 sm:right-8" />}
				</Button>
				<span className="text-xs font-normal text-white/50 self-center py-5">Lub</span>
				<GoogleButton isSubmitting={isSubmitting} />
			</form>
			<div className="flex w-full items-center justify-between pb-3">
				<p className="text-xs font-normal text-white/70 sm:text-sm">Nie masz jeszcze konta?</p>
				<Button variant="dark" href="/panel/rejestracja" restClass="rounded-lg" disabled={isSubmitting}>
					Wpisz się
				</Button>
			</div>
		</>
	)
}

export default LoginForm
