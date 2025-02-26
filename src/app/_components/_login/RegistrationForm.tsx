import { z } from 'zod'
import Input from '../_ui/Input'
import Button from '../_ui/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface SignUpType {
    email: string
    password: string
    confirmPassword: string
}

const schema = z
    .object({
        email: z.string().email('Nieprawidłowy email'),
        password: z.string().min(8, 'Hasło musi mieć co najmniej 8 znaków'),
        confirmPassword: z
            .string()
            .min(8, 'Hasło musi mieć co najmniej 8 znaków'),
    })
    .refine((data) => data.password == data.confirmPassword, {
        message: 'Hasła muszą być takie same',
        path: ['confirmPassword'],
    })

function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpType>({ resolver: zodResolver(schema) })

    const onSubmit: SubmitHandler<SignUpType> = (userData) => {
        console.log(userData)
    }
    return (
        <>
            <form
                className="flex flex-1 flex-grow flex-col justify-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="text-center font-bold text-white lg:px-2 lg:text-left">
                    <h3 className="mb-3 text-3xl md:text-4xl lg:text-5xl xl:mb-6 2xl:text-6xl">
                        Wpisz się
                    </h3>
                    <p className="text-sm font-normal text-white/70">
                        Wprowadź dane potrzebne do rejestracji konta
                    </p>
                </div>
                <div className="flex flex-col items-start gap-3 py-8">
                    <Input
                        type="email"
                        name="username"
                        placeholder="Email"
                        formRegister={register('email')}
                        error={errors?.email || null}
                        message={errors?.email?.message || null}
                    />
                    <Input
                        type="text"
                        name="password"
                        placeholder="Hasło"
                        formRegister={register('password')}
                        error={errors?.password || null}
                        message={errors?.password?.message || null}
                    />
                    <Input
                        type="text"
                        name="confirmPassword"
                        placeholder="Powtórz hasło"
                        formRegister={register('confirmPassword')}
                        error={errors?.confirmPassword || null}
                        message={errors?.confirmPassword?.message || null}
                    />
                </div>
                <Button variant="purple" restClass="w-full py-3 rounded-lg">
                    Wpisz się
                </Button>
            </form>
            <div className="flex w-full items-center justify-between pb-3">
                <p className="text-xs font-normal text-white/70 sm:text-sm">
                    Posiadasz już konto?
                </p>
                <Button
                    variant="dark"
                    href="/panel/zaloguj-sie"
                    restClass="rounded-lg"
                >
                    Zaloguj się
                </Button>
            </div>
        </>
    )
}

export default RegistrationForm
