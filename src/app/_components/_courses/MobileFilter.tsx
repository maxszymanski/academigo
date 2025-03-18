'use client'
import { useRef } from 'react'
import useAppStore from '@/app/stores/store'
import Filters from './Filters'
import Modal from '../_ui/Modal'
import SubCategories from './SubCategories'

function MobileFilter({ category }: { category: string }) {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const closeModal = useAppStore((state) => state.closeModal)

    return (
        <Modal
            position="left-0 top-[110%]"
            modalRef={modalRef}
            closeModal={closeModal}
            buttonId="categories-button"
        >
            <Filters>
                <SubCategories category={category} />
            </Filters>
        </Modal>
    )
}

export default MobileFilter
