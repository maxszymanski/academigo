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
}: InputType) {
	return (
		<div className="w-full px-2">
			<input
				type={type}
				placeholder={placeholder}
				className={`${restClass} text-sm  py-2.5 border-b border-white/40 w-full transition-colors duration-300 text-white/80 bg-transparent outline-none focus:border-white hover:border-white  placeholder:text-white/50   ${
					error ? 'border-red-500' : ''
				}`}
				name={name}
				{...formRegister}
				autoComplete={autoComplete}
			/>
			{error && <span className="inline-block text-xs text-red-500 font-light">{message}</span>}
		</div>
	)
}

export default Input
