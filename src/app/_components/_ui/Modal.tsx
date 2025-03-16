import useClickOutside from '@/app/_hooks/useClickOutside'
import { RefObject } from 'react'

function Modal({
    children,
    modalRef,
    closeModal,
    position,
    buttonId,
}: {
    children: React.ReactNode
    modalRef: RefObject<HTMLDivElement | null> | null
    closeModal: () => void
    position?: string | undefined
    buttonId: string
}) {
    useClickOutside(modalRef, closeModal, buttonId)

    return (
        <div
            className={`min-w-sm absolute z-50 flex h-fit w-full justify-center md:min-w-80 ${position ? position : ''}`}
            ref={modalRef}
        >
            <div className="w-full max-w-md animate-visible rounded-xl border border-primary bg-white text-center shadow-md shadow-primary2 md:min-w-80">
                {children}
            </div>
        </div>
    )
}

export default Modal
