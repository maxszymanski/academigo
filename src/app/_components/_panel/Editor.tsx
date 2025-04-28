import { useEffect } from 'react'
import { useQuill } from 'react-quilljs'

import 'quill/dist/quill.snow.css'
import '@/app/styles/quill.editor.css'
import { FieldError } from 'react-hook-form'
import DOMPurify from 'dompurify'

interface EditorProps {
	value?: string
	placeholder: string
	onChange: (value: string) => void
	error?: FieldError | null
}

export const Editor = ({ value, placeholder, onChange, error }: EditorProps) => {
	const theme = 'snow'

	const modules = {
		toolbar: [
			['bold', 'underline', 'strike'],
			[{ align: [] }],

			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ indent: '-1' }, { indent: '+1' }],

			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			['link'],
			[{ color: [] }],
		],
	}

	const formats = ['bold', 'underline', 'strike', 'align', 'list', 'indent', 'header', 'link', 'color']

	const { quill, quillRef } = useQuill({
		theme,
		modules,
		formats,
		placeholder,
	})

	useEffect(() => {
		if (quill) {
			if (value) {
				const cleanValue = DOMPurify.sanitize(value)
				quill.clipboard.dangerouslyPasteHTML(cleanValue)
			}
			quill.on('text-change', () => {
				const rawHTML = quill.root.innerHTML
				const cleanHTML = DOMPurify.sanitize(rawHTML)
				onChange(cleanHTML)
			})
		}

		return () => {
			if (quill) {
				quill.off('text-change')
			}
		}
	}, [quill, value, onChange])

	return (
		<div
			className={`bg-slate50 overflow-hidden border outline-none focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none placeholder:dark2/90  text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500  rounded-lg  ${error ? 'border-red-500' : 'border-slate-200'}  h-96 lg:h-[700px] `}>
			<div
				className=" overflow-y-auto pb-12 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2"
				ref={quillRef}
			/>
		</div>
	)
}
