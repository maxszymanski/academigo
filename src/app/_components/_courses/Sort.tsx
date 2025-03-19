'use client'
import { FaChevronDown } from 'react-icons/fa'
import Button from '../_ui/Button'
import useAppStore from '@/app/stores/store'

function Sort() {
    const openModal = useAppStore((state) => state.openModal)
    const setOpenModal = useAppStore((state) => state.setOpenModal)
    const closeModal = useAppStore((state) => state.closeModal)

    const handleOpenFilterModal = () => {
        {
            if (openModal === 'filter') {
                closeModal()
            } else {
                setOpenModal('filter')
            }
        }
    }

    return (
        <div className="flex items-center gap-3.5">
            <Button
                variant="filter"
                restClass="lg:hidden"
                onClick={handleOpenFilterModal}
            >
                Filtrowanie <FaChevronDown className="ml-2.5 size-2.5" />
            </Button>
            <Button onClick={() => console.log('siema')} variant="filter">
                Sortowanie <FaChevronDown className="ml-2.5 size-2.5" />
            </Button>
        </div>
    )
}

export default Sort
