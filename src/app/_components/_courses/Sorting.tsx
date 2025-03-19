'use client'
import useAppStore from '@/app/stores/store'
import { useRef } from 'react'
import Modal from '../_ui/Modal'
import SortingList from './SortingList'

function Sorting() {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const closeModal = useAppStore((state) => state.closeModal)
    const openModal = useAppStore((state) => state.openModal)

    if (openModal != 'sort') return null

    return (
        <Modal
            position="left-0 top-[110%] md:w-80 md:right-0 md:left-auto lg:max-w-20"
            modalRef={modalRef}
            closeModal={closeModal}
            buttonId="sort-button"
        >
            {/*to close Modal immediately add closeModal={closeModal} openModal={openModal}  */}
            <SortingList />
        </Modal>
    )
}

export default Sorting
