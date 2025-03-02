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
    modalRef: RefObject<HTMLDivElement> | null
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
            <div className="animate-visible w-full max-w-md rounded-xl border border-primary bg-white text-center shadow-md shadow-primary2 md:min-w-80">
                {children}
            </div>
        </div>
    )
}

export default Modal
