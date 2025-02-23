'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Input from '../_ui/Input'
import Button from '../Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface LoginType {
	email: string
	password: string
}

const schema = z.object({
	email: z.string().email('Nieprawidłowy email'),
	password: z.string().min(8, 'Hasło musi mieć co najmniej 8 znaków'),
})

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginType>({ resolver: zodResolver(schema) })

	const onSubmit: SubmitHandler<LoginType> = userData => {
		console.log(userData)
	}

	return (
		<>
			<form className="flex flex-col flex-grow justify-center flex-1" onSubmit={handleSubmit(onSubmit)}>
				<div className="text-white font-bold text-center lg:text-left lg:px-2">
					<h3 className="text-3xl mb-3 md:text-4xl lg:text-5xl xl:mb-6 2xl:text-6xl">Zaloguj się</h3>
					<p className="text-white/70 font-normal text-sm">Wprowadź dane swojego konta</p>
				</div>
				<div className="flex flex-col items-start gap-3 py-8">
					<Input
						type="email"
						name="email"
						placeholder="Email"
						formRegister={register('email')}
						error={errors?.email || null}
						message={errors?.email?.message || null}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Hasło"
						formRegister={register('password')}
						error={errors?.password || null}
						message={errors?.password?.message || null}
					/>
					<Button href="/resetowanie-hasla" restClass="text-xs mt-2 px-2 py-2" variant="transparent">
						Zapomniałeś hasła?
					</Button>
				</div>
				<Button variant="purple" restClass="w-full py-3 rounded-lg ">
					Zaloguj się
				</Button>
			</form>
			<div className="w-full flex items-center justify-between pb-3">
				<p className="text-white/70 font-normal text-xs sm:text-sm">Nie masz jeszcze konta?</p>
				<Button variant="dark" href="/panel/rejestracja" restClass="rounded-lg">
					Wpisz się
				</Button>
			</div>
		</>
	)
}

export default LoginForm
