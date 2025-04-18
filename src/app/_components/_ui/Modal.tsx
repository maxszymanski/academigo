import useClickOutside from '@/app/_hooks/useClickOutside'
import { RefObject } from 'react'

function Modal({
	children,
	modalRef,
	closeModal,
	position,
	buttonId,
	fullPageModal = false,
}: {
	children: React.ReactNode
	modalRef: RefObject<HTMLDivElement | null> | null
	closeModal: () => void
	position?: string | undefined
	buttonId: string
	fullPageModal?: boolean
}) {
	useClickOutside(modalRef, closeModal, buttonId)

	return (
		<>
			{fullPageModal ? (
				<div
					className={`absolute w-full h-full left-0 top-0 z-50 flex items-center justify-center bg-slate50 bg-opacity-80 flex-col gap-4 px-2`}>
					<div
						className="w-fit  animate-visible rounded-xl border border-primary bg-white text-center shadow-md shadow-primary2 "
						ref={modalRef}>
						{children}
					</div>
				</div>
			) : (
				<div
					className={`min-w-sm absolute z-50 flex h-fit w-full justify-center md:min-w-80 lg:min-w-fit ${position ? position : ''}`}
					ref={modalRef}>
					<div className="w-full max-w-md animate-visible rounded-xl border border-primary bg-white text-center shadow-md shadow-primary2 md:min-w-80 lg:min-w-fit">
						{children}
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
