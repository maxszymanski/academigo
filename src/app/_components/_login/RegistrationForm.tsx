'use client'
import { z } from 'zod'
import Input from '../_ui/Input'
import Button from '../_ui/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { signup } from '../../_actions/auth'
import Spinner from '../_ui/Spinner'

interface SignUpType {
	email: string
	username: string
	password: string
	confirmPassword: string
	gender: 'kobieta' | 'mężczyzna'
}

const schema = z
	.object({
		email: z.string().nonempty('Email nie może być pusty').email('Nieprawidłowy email'),
		username: z
			.string()
			.nonempty('Nazwa użytkownika nie może być pusta')
			.min(3, 'Nazwa użytkownika musi mieć co najmniej 3 znaki')
			.max(20, 'Nazwa użytkownika może mieć maksymalnie 20 znaków'),
		password: z.string().nonempty('Hasło nie może być puste').min(8, 'Hasło musi mieć co najmniej 8 znaków'),
		confirmPassword: z
			.string()
			.nonempty('Potwierdzenie hasła nie może być puste')
			.min(8, 'Hasło musi mieć co najmniej 8 znaków'),
		gender: z
			.enum(['kobieta', 'mężczyzna'])
			.nullable()
			.refine(value => value !== null, {
				message: 'Proszę wybrać płeć',
			}),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Hasła muszą być takie same',
		path: ['confirmPassword'],
	})

function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SignUpType>({ resolver: zodResolver(schema) })
	const [isPending, startTransition] = useTransition()
	const [error, setError] = useState<string | null>(null)

	const onSubmit: SubmitHandler<SignUpType> = data => {
		startTransition(async () => {
			const formData = new FormData()
			formData.append('email', data.email)
			formData.append('password', data.password)
			formData.append('username', data.username)
			formData.append('gender', data.gender)

			const result = await signup(formData)

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
					<h3 className="mb-3 text-3xl md:text-4xl lg:text-5xl xl:mb-6 2xl:text-6xl">Wpisz się</h3>
					<p className="text-sm font-normal text-white/70">Wprowadź dane potrzebne do rejestracji konta</p>
				</div>
				<div className="flex flex-col items-start gap-3 py-8">
					<Input
						type="email"
						name="email"
						placeholder="Email"
						formRegister={register('email')}
						error={errors?.email || null}
						message={errors?.email?.message || null}
						disabled={isPending}
					/>
					<Input
						type="text"
						name="usernname"
						placeholder="Imię"
						formRegister={register('username')}
						error={errors?.username || null}
						message={errors?.username?.message || null}
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
					<Input
						type="password"
						name="confirmPassword"
						placeholder="Powtórz hasło"
						formRegister={register('confirmPassword')}
						error={errors?.confirmPassword || null}
						message={errors?.confirmPassword?.message || null}
						disabled={isPending}
					/>
					<div className="w-full">
						<div className="flex items-center justify-evenly px-2.5 w-full mt-2">
							<label className="flex items-center gap-2">
								<input type="radio" value="kobieta" {...register('gender')} disabled={isPending} />
								<span className="text-white/50">Kobieta</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="radio" value="mężczyzna" {...register('gender')} disabled={isPending} />
								<span className="text-white/50">Mężczyzna</span>
							</label>
						</div>
						{errors.gender && (
							<span className="inline-block text-xs font-light text-red-500 mt-2 self-start px-2.5">
								{errors.gender.message}
							</span>
						)}
					</div>
					{error && <span className="text-xs font-light text-red-500 mt-2 pl-2">{error}</span>}
				</div>
				<div className="w-full px-2">
					<Button variant="purple" restClass="w-full py-3 rounded-lg" disabled={isPending}>
						{isPending ? 'Wpisywanie' : 'Wpisz się'}
						{isPending && <Spinner restClass="ml-6 absolute right-3 sm:right-8" />}
					</Button>
				</div>
			</form>
			<div className="flex w-full items-center justify-between pb-3">
				<p className="text-xs font-normal text-white/70 sm:text-sm">Posiadasz już konto?</p>
				<Button variant="dark" href="/panel/zaloguj-sie" restClass="rounded-lg">
					Zaloguj się
				</Button>
			</div>
		</>
	)
}

export default RegistrationForm
