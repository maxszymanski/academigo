'use client'
import Input from '../_ui/Input'
import Button from '../_ui/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { signup } from '../../_actions/auth'
import Spinner from '../_ui/Spinner'
import { SignUpType, signUpSchema } from '@/app/_lib/validators'

function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<SignUpType>({ resolver: zodResolver(signUpSchema) })

	const [error, setError] = useState<string | null>(null)

	const onSubmit: SubmitHandler<SignUpType> = async data => {
		const formData = new FormData()

		for (const key in data) {
			formData.append(key, data[key as keyof SignUpType] as string)
		}

		const result = await signup(formData)

		if (result?.error) {
			setError(result.error)
			reset()
		}
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
						disabled={isSubmitting}
					/>
					<Input
						type="text"
						name="usernname"
						placeholder="Imię"
						formRegister={register('username')}
						error={errors?.username || null}
						message={errors?.username?.message || null}
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
					<Input
						type="password"
						name="confirmPassword"
						placeholder="Powtórz hasło"
						formRegister={register('confirmPassword')}
						error={errors?.confirmPassword || null}
						message={errors?.confirmPassword?.message || null}
						disabled={isSubmitting}
					/>
					{/* <div className="w-full">
						<div className="flex items-center justify-evenly px-2.5 w-full mt-2">
							<label className="flex items-center gap-2">
								<input type="radio" value="kobieta" {...register('gender')} disabled={isSubmitting} />
								<span className="text-white/50">Kobieta</span>
							</label>
							<label className="flex items-center gap-2">
								<input type="radio" value="mężczyzna" {...register('gender')} disabled={isSubmitting} />
								<span className="text-white/50">Mężczyzna</span>
							</label>
						</div>
						{errors.gender && (
							<span className="inline-block text-xs font-light text-red-500 mt-2 self-start px-2.5">
								{errors.gender.message}
							</span>
						)}
					</div> */}
					{error && <span className="text-xs font-light text-red-500 mt-2 pl-2">{error}</span>}
				</div>
				<div className="w-full px-2">
					<Button variant="purple" restClass="w-full py-3 rounded-lg" disabled={isSubmitting}>
						{isSubmitting ? 'Wpisywanie' : 'Wpisz się'}
						{isSubmitting && <Spinner restClass="ml-6 absolute right-3 sm:right-8" />}
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
