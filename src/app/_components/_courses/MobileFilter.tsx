'use client'
import { ReactNode, useRef } from 'react'
import useAppStore from '@/app/stores/store'

import Modal from '../_ui/Modal'

function MobileFilter({ children }: { children: ReactNode }) {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const closeModal = useAppStore((state) => state.closeModal)
    const openModal = useAppStore((state) => state.openModal)

    if (openModal != 'filter') return null

    return (
        <Modal
            position="left-0 top-[110%] md:w-80 md:right-0 md:left-auto"
            modalRef={modalRef}
            closeModal={closeModal}
            buttonId="filter-button"
        >
            {children}
        </Modal>
    )
}

export default MobileFilter
