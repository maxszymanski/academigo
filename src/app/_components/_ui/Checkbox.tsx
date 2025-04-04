'use client'
import { FieldError } from 'react-hook-form'

interface CheckboxProps {
	name: string
	checked?: boolean
	id: string
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
	termLabel?: boolean
	label?: string
	required?: boolean
	error?: FieldError | null
	message?: string
	formRegister?: object
}

function Checkbox({
	name,
	checked,
	id,
	onClick,
	termLabel,
	label,
	required,
	error,
	message,
	formRegister = {},
}: CheckboxProps) {
	return (
		<div className="w-full">
			<div className="inline-flex items-center">
				<label className="flex items-center cursor-pointer relative " htmlFor={id}>
					<input
						type="checkbox"
						name={name}
						checked={checked}
						className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-white checked:border-slate-400 "
						id={id}
						onClick={onClick}
						{...formRegister}
					/>
					<span className="absolute text-dark2 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-3 w-3"
							viewBox="0 0 20 20"
							fill="currentColor"
							stroke="currentColor"
							strokeWidth="1">
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"></path>
						</svg>
					</span>
				</label>
				<label className="cursor-pointer ml-4 text-dark2 text-sm  " htmlFor={id}>
					{termLabel ? (
						<>
							Potwierdzam że akceptuję
							<a
								className="font-bold transition-colors duration-300 hover:text-dark2/90"
								href="/warunki-użytkowania"
								target="_blank"
								rel="noopener">
								regulamin
							</a>
							oraz
							<a
								className="font-bold transition-colors duration-300 hover:text-dark2/90"
								href="/warunki-użytkowania"
								target="_blank"
								rel="noopener">
								politykę prywatności.
							</a>
						</>
					) : (
						label
					)}

					{required && <span className="text-red">*</span>}
				</label>
			</div>

			{error && <span className="text-sm text-red-500 mt-2 pl-1">{message}</span>}
		</div>
	)
}

export default Checkbox
