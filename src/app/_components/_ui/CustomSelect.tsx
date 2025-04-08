'use client'
import { FieldError } from 'react-hook-form'

function CustomSelect({
	optionsData,
	label,
	defaultOption,
	name,
	formRegister = {},
	error,
	message,
}: {
	optionsData: string[]
	label: string
	defaultOption: string
	name: string
	formRegister?: object
	error?: FieldError | null
	message?: string | null
}) {
	return (
		<div className="w-full md:max-w-md">
			<label htmlFor={name} className={`block text-dark2 mb-1`}>
				{label}
				<span className="text-red-400"> *</span>
			</label>
			<select
				name={name}
				id={name}
				className="w-full rounded-lg mt-1 text-sm px-5 py-3.5 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed md:max-w-md 2xl:max-h-[50px] cursor-pointer disabled:text-dark2/90 appearance-none "
				defaultValue={defaultOption}
				{...formRegister}>
				{/* <option disabled className="dark2/60">
					{defaultOption}
				</option> */}
				{optionsData?.map((option, index) => (
					<option key={option + index} value={option}>
						{option}
					</option>
				))}
			</select>
			{error && <span className="text-sm  text-red-500 mt-2 pl-1">{message}</span>}
		</div>
	)
}

export default CustomSelect
