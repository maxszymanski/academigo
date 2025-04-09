import Image from 'next/image'
import { FieldError } from 'react-hook-form'
import { FaCamera } from 'react-icons/fa'

interface PanelInputProps {
	type?: string
	placeholder: string
	name: string
	error?: FieldError | null
	message?: string | null
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
	defaultValue?: string | number
	preview?: string | null
	description?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

function PanelInput({
	type,
	placeholder,
	name,
	error,
	message,
	label,
	formRegister,
	required,
	min,
	minLenght,
	maxLenght,
	max,
	disabled,
	children,
	textArea,
	defaultValue,
	preview,
	description,
	onChange,
}: PanelInputProps) {
	return (
		<div
			className={` flex flex-col   ${textArea ? 'max-w-full ' : 'md:max-w-md'} ${type === 'file' ? ' w-[330px]' : 'w-full'}`}>
			<div className={`${children ? 'flex items-center justify-between text-nowrap w-full gap-8' : ''}`}>
				<label htmlFor={name} className={`block text-dark2 ${textArea ? 'mb-2' : 'mb-1'}`}>
					{label} {required && <span className="text-red-400">*</span>}{' '}
					{description && !!preview && (
						<>
							<br /> <span className="text-xs font-light">{description}</span>
						</>
					)}
				</label>

				{children}
			</div>
			<div className="relative">
				{textArea ? (
					<textarea
						placeholder={placeholder}
						className={`peer block max-h-36 min-h-96 w-full resize-y appearance-none border border-slate200 text-sm outline-none focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500 px-5 py-3.5 rounded-lg  bg-slate50 mt-1 `}
						name={name}
						{...formRegister}
						disabled={disabled}
					/>
				) : (
					<input
						type={type}
						name={name}
						id={name}
						className={`rounded-lg mt-1 text-sm px-5 py-3.5 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500 ${type === 'file' ? 'h-[200px] w-[330px] cursor-pointer flex items-center justify-center ' : 'w-full '} ${!!preview ? 'hidden' : ''}`}
						placeholder={placeholder}
						{...formRegister}
						min={min}
						max={max}
						minLength={minLenght}
						maxLength={maxLenght}
						disabled={disabled}
						defaultValue={defaultValue}
						onChange={onChange}
					/>
				)}
				{type === 'file' && preview && (
					<label
						className="relative w-[330px] h-[200px] overflow-hidden rounded-lg block cursor-pointer mt-1 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300  hover:border-slate-400 after:contents-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:opacity-0 hover:after:opacity-100 hover:after:bg-slate-200/30 after:duration-300 after:transition-colors"
						htmlFor="picture"
						tabIndex={1}>
						<Image src={preview || '/'} fill alt="zdjecie podglądowe" className="object-cover" />
					</label>
				)}
				{type === 'file' && !preview && (
					<FaCamera className="absolute top-1/2 size-14 text-slate-400 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
				)}
				{error && <span className="text-sm  text-red-500 mt-2 pl-1">{message}</span>}
			</div>
		</div>
	)
}

export default PanelInput
