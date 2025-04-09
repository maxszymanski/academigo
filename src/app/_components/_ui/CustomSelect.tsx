'use client'
import { Category, SubCat } from '@/app/_types/types'
import { FieldError } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa'
import { SpecializationType } from '../_courses/Specialization'

function CustomSelect({
	optionsData,
	label,
	defaultOption,
	name,
	formRegister = {},
	error,
	message,
	categoriesData,
	subCategoriesData,
	specializationsData,
	disabled = false,
}: {
	optionsData?: string[]
	categoriesData?: Category[]
	subCategoriesData?: SubCat[]
	specializationsData?: SpecializationType[]
	label: string
	defaultOption: string
	name: string
	formRegister?: object
	error?: FieldError | null
	message?: string | null
	disabled?: boolean
}) {
	return (
		<div className="w-full md:max-w-md relative">
			<label htmlFor={name} className={`block text-dark2 mb-1`} aria-disabled={disabled}>
				{label}
				<span className="text-red-400"> *</span>
			</label>
			<select
				name={name}
				id={name}
				className="w-full rounded-lg mt-1 text-sm px-5 py-3.5 border border-slate-200 bg-slate50 outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none text-dark2 disabled:cursor-not-allowed md:max-w-md 2xl:max-h-[50px] cursor-pointer disabled:text-dark2/80 appearance-none disabled:bg-stone-100 "
				defaultValue=""
				disabled={disabled}
				{...formRegister}>
				<option value="" disabled className="bg-[#C8C8C8] text-white">
					{defaultOption}
				</option>
				{optionsData &&
					optionsData.length > 0 &&
					optionsData?.map((option, index) => (
						<option key={option + index} value={option}>
							{option}
						</option>
					))}

				{categoriesData &&
					categoriesData.length > 0 &&
					categoriesData?.map((option, index) => (
						<option key={option.name + index} value={option.slug}>
							{option.name}
						</option>
					))}

				{subCategoriesData &&
					subCategoriesData.length > 0 &&
					subCategoriesData?.map((option, index) => (
						<option key={option.name + index} value={option.subcategory_slug}>
							{option.name}
						</option>
					))}

				{specializationsData &&
					specializationsData.length > 0 &&
					specializationsData?.map((option, index) => (
						<option key={option.name + index} value={option.spec_slug}>
							{option.name}
						</option>
					))}
			</select>
			<div className="absolute right-3 top-[60%] pointer-events-none text-gray-400">
				<FaChevronDown />
			</div>
			{error && <span className="text-sm  text-red-500 mt-2 pl-1">{message}</span>}
		</div>
	)
}

export default CustomSelect
