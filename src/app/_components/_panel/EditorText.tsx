import { Control, Controller, FieldError } from 'react-hook-form'
import { Editor } from './Editor'
import { AddCourseType } from '@/app/_lib/validators'

interface EditorProps {
	error?: FieldError | null
	message?: string | null
	control: Control<AddCourseType>
	setContent: React.Dispatch<React.SetStateAction<string>>
}

const EditorText = ({ error, message, control, setContent }: EditorProps) => {
	return (
		<div className="w-full flex flex-col">
			<label htmlFor="Opis kursu" className="block text-dark2 mb-3">
				Opis kursu <span className="text-red-400">*</span>
			</label>
			<div className="h-full">
				<Controller
					name="long_description"
					control={control}
					render={({ field: { value } }) => (
						<Editor
							onChange={setContent}
							value={value}
							placeholder="Wprowadź opis kursu"
							error={error || null}
						/>
					)}
				/>
			</div>
			{error && <p className="text-sm  text-red-500 mt-2 pl-1">{message}</p>}
		</div>
	)
}

export default EditorText
