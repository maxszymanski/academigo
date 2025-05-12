'use client'

import toast from 'react-hot-toast'
import { MdOutlineContentCopy } from 'react-icons/md'

function CopyButton({ url }: { url: string }) {
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(url)
		} catch (err) {
			toast.error('Błąd kopiowania linku')
			console.warn(err)
		} finally {
			toast.success('Link został skopiowany do schowka')
		}
	}

	return (
		<button
			title="Kopiuj link"
			className="inline-flex px-1 py-1.5 transition-colors duration-300 hover:bg-dark2/10 rounded-md flex-shrink-0 text-primary"
			onClick={handleCopy}>
			<MdOutlineContentCopy className="size-8 pointer-events-none" />
		</button>
	)
}

export default CopyButton
