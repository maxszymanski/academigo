'use client'
import { FieldError } from 'react-hook-form'

interface PanelInputProps {
	type?: string
	placeholder: string
	name: string
	error?: FieldError | null
	message?: string
	label: string
	formRegister?: object
	required?: boolean
	min?: number
	minLenght?: number
	max?: number
	maxLenght?: number
	disabled?: boolean
	children?: React.ReactNode
	textArea?: boolean
}

function PanelInput({
	type,
	placeholder,
	name,
	error,
	message,
	label,
	formRegister = {},
	required,
	min,
	minLenght,
	maxLenght,
	max,
	disabled,
	children,
	textArea,
}: PanelInputProps) {
	return (
		<div className={`w-full   ${textArea ? 'max-w-full' : 'md:max-w-md'}`}>
			<div className={`${children ? 'flex items-center justify-between text-nowrap w-full gap-8' : ''}`}>
				<label htmlFor={name} className={`block text-dark2 ${textArea ? 'mb-2' : 'mb-1'}`}>
					{label} {required && <span className="text-red-400">*</span>}
				</label>
				{children}
			</div>
			{textArea ? (
				<textarea
					placeholder={placeholder}
					className={`peer block max-h-36 min-h-96 w-full resize-y appearance-none border border-slate200 text-sm outline-none focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500 px-5 py-3.5 rounded-lg  bg-slate50 mt-1 ${
						error ? 'border-red-500' : ''
					}`}
					name={name}
					{...formRegister}
					disabled={disabled}
				/>
			) : (
				<input
					type={type}
					name={name}
					className="w-full rounded-lg mt-1 text-sm px-5 py-3.5 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500"
					placeholder={placeholder}
					{...formRegister}
					min={min}
					max={max}
					minLength={minLenght}
					maxLength={maxLenght}
					disabled={disabled}
				/>
			)}
			{error && <span className="text-sm  text-red-500 mt-2 pl-1">{message}</span>}
		</div>
	)
}

export default PanelInput
