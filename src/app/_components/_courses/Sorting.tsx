'use client'
import useAppStore from '@/app/stores/store'
import { ReactNode, useRef } from 'react'
import Modal from '../_ui/Modal'

function Sorting({ children }: { children: ReactNode }) {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const closeModal = useAppStore((state) => state.closeModal)
    const openModal = useAppStore((state) => state.openModal)

    if (openModal != 'sortng') return null

    return (
        <Modal
            position="left-0 top-[110%] md:w-80 md:right-0 md:left-auto"
            modalRef={modalRef}
            closeModal={closeModal}
            buttonId="sort-button"
        >
            {children}
        </Modal>
    )
}

export default Sorting
