import { Control, Controller, FieldError } from 'react-hook-form'
import { Editor } from './Editor'
import { UpdateUserDescription } from '@/app/_lib/validators'

interface EditorProps {
	error?: FieldError | null
	message?: string | null
	control: Control<UpdateUserDescription>
	setContent: React.Dispatch<React.SetStateAction<string>>
	placeholder?: string
}

const EditorUserDescription = ({
	error,
	message,
	control,
	setContent,
	placeholder = 'Wprowadź swój opis użytkownika',
}: EditorProps) => {
	return (
		<div className="w-full flex flex-col">
			<label htmlFor="long_description" className="block text-dark2 mb-3">
				Opis
			</label>
			<div className="h-full">
				<Controller
					name="long_description"
					control={control}
					render={({ field: { value } }) => (
						<Editor onChange={setContent} value={value} placeholder={placeholder} error={error || null} />
					)}
				/>
			</div>
			{error && <p className="text-sm  text-red-500 mt-2 pl-1">{message}</p>}
		</div>
	)
}

export default EditorUserDescription
