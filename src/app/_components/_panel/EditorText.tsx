import React, { useRef, useState } from 'react'
import Editor from './Editor'
import Quill from 'quill'

const Delta = Quill.import('delta')

const EditorText = () => {
	const [range, setRange] = useState()
	const [lastChange, setLastChange] = useState()
	const [readOnly, setReadOnly] = useState(false)

	// Use a ref to access the quill instance directly
	const quillRef = useRef()

	return (
		<div className="w-full flex flex-col border border-slate-200 peer  min-h-96  appearance-none  text-sm outline-none focus:ring-1 focus:ring-slate-300 transition-colors duration-300 hover:bg-slate-200 placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500 rounded-lg  bg-slate50 mt-1 overflow-hidden ">
			<Editor
				ref={quillRef}
				readOnly={readOnly}
				defaultValue={new Delta()
					.insert('Hello')
					.insert('\n', { header: 1 })
					.insert('Some ')
					.insert('initial', { bold: true })
					.insert(' ')
					.insert('content', { underline: true })
					.insert('\n')}
				onSelectionChange={setRange}
				onTextChange={setLastChange}
			/>
		</div>
	)
}

export default EditorText
