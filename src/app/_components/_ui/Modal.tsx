'use client'
import useClickOutside from '@/app/_hooks/useClickOutside'
import { RefObject, useEffect } from 'react'
import { createPortal } from 'react-dom'

function Modal({
	children,
	modalRef,
	closeModal,
	position,
	buttonId,
	fullPageModal = false,
	reset,
	userNav = false,
}: {
	children: React.ReactNode
	modalRef: RefObject<HTMLDivElement | null> | null
	closeModal: () => void
	position?: string | undefined
	buttonId: string
	fullPageModal?: boolean
	reset?: () => void
	userNav?: boolean
}) {
	useClickOutside(modalRef, closeModal, buttonId)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault()
				if (reset) reset()
				closeModal()
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal, reset])

	return (
		<>
			{fullPageModal ? (
				createPortal(
					<div
						className={`absolute w-full h-full left-0 top-0 z-50 flex items-center justify-center bg-slate50 bg-opacity-80 flex-col gap-4 px-2`}>
						<div
							className="w-fit  animate-visible rounded-xl border border-primary bg-white text-center shadow-md shadow-primary2 "
							ref={modalRef}>
							{children}
						</div>
					</div>,
					document.body
				)
			) : (
				<div
					className={` absolute z-50 flex h-fit  justify-center ${position ? position : ''} ${userNav ? 'w-fit' : 'min-w-sm  md:min-w-80 lg:min-w-fit w-full'} `}
					ref={modalRef}>
					<div className="w-full max-w-md animate-visible rounded-xl border border-primary bg-white text-center shadow-md shadow-primary2 ">
						{children}
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
