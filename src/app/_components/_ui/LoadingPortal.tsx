'use client'

import ReactDOM from 'react-dom'
import Loader from './Loader'

export default function LoadingPortal({ information = 'Trwa wczytywanie kursów' }: { information?: string }) {
	return ReactDOM.createPortal(
		<div className="fixed w-full inset-0 z-50 flex items-center justify-center bg-slate50 bg-opacity-80 flex-col gap-4">
			<Loader />
			<p className="xl:text-lg">{information}</p>
		</div>,
		document.body
	)
}
