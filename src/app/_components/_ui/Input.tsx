'use client'
import { FieldError } from 'react-hook-form'

interface InputType {
    type: string
    placeholder?: string | undefined
    restClass?: string
    error?: FieldError | null
    message?: string | null
    name: string
    formRegister?: object
    autoComplete?: string
    wrapperClass?: string
    children?: React.ReactNode
}

function Input({
    restClass = '',
    type,
    placeholder = undefined,
    message = undefined,
    error,
    name,
    autoComplete = 'off',
    formRegister = {},
    wrapperClass = '',
    children,
}: InputType) {
    return (
        <div
            className={`relative flex w-full items-center justify-center px-3 ${wrapperClass}`}
        >
            {children && (
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 sm:left-12 md:left-20">
                    {children}
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={`${restClass} w-full border-b border-white/40 bg-transparent py-2.5 text-sm text-white/80 outline-none transition-colors duration-300 placeholder:text-white/50 hover:border-white focus:border-white ${
                    error ? 'border-red-500' : ''
                }`}
                name={name}
                {...formRegister}
                autoComplete={autoComplete}
            />
            {error && (
                <span className="inline-block text-xs font-light text-red-500">
                    {message}
                </span>
            )}
        </div>
    )
}

export default Input
