'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Input from '../_ui/Input'
import Button from '../_ui/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { login } from '../../_actions/auth'

interface LoginType {
	email: string
	password: string
}

const schema = z.object({
	email: z.string().nonempty('Email jest wymagany').email('Nieprawidłowy email'),
	password: z.string().nonempty('Hasło jest wymagane').min(8, 'Hasło musi mieć co najmniej 8 znaków'),
})

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginType>({ resolver: zodResolver(schema) })
	const [isPending, startTransition] = useTransition()
	const [error, setError] = useState<string | null>(null)

	const onSubmit: SubmitHandler<LoginType> = data => {
		startTransition(async () => {
			const formData = new FormData()
			formData.append('email', data.email)
			formData.append('password', data.password)

			const result = await login(formData)
			if (result?.error) {
				setError(result.error)
				reset()
			}
		})
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
						disabled={isPending}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Hasło"
						formRegister={register('password')}
						error={errors?.password || null}
						message={errors?.password?.message || null}
						disabled={isPending}
					/>
					{error && <span className="text-xs font-light text-red-500 mt-2 pl-2">{error}</span>}
					<Button href="/resetowanie-hasla" restClass="text-xs mt-2 px-2 py-2" variant="transparent">
						Zapomniałeś hasła?
					</Button>
				</div>
				<Button variant="purple" restClass="w-full py-3 rounded-lg " disabled={isPending}>
					{isPending ? 'Logowanie ...' : 'Zaloguj się'}
				</Button>
			</form>
			<div className="flex w-full items-center justify-between pb-3">
				<p className="text-xs font-normal text-white/70 sm:text-sm">Nie masz jeszcze konta?</p>
				<Button variant="dark" href="/panel/rejestracja" restClass="rounded-lg">
					Wpisz się
				</Button>
			</div>
		</>
	)
}

export default LoginForm
