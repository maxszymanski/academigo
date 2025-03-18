'use client'

import { FaChevronDown } from 'react-icons/fa'
import Button from '../_ui/Button'
import CategoriesList from './CategoriesList'
import useAppStore from '@/app/stores/store'
import { Category } from '@/app/_types/types'

function Categories({ categories }: { categories: Category[] }) {
    const openModal = useAppStore((state) => state.openModal)
    const setOpenModal = useAppStore((state) => state.setOpenModal)
    const closeModal = useAppStore((state) => state.closeModal)

    const handleOpenModal = () => {
        {
            if (openModal === 'categories') {
                closeModal()
            } else {
                setOpenModal('categories')
            }
        }
    }

    return (
        <div className="relative w-full overflow-visible md:max-w-max lg:hidden">
            <Button
                onClick={handleOpenModal}
                variant="filter"
                restClass="w-full justify-between px-7 xl:px-6  md:w-fit"
                id="categories-button"
            >
                Kategorie{' '}
                <FaChevronDown className="pointer-events-none ml-2.5 size-2.5 justify-items-end" />
            </Button>

            {openModal === 'categories' && (
                <CategoriesList categories={categories} />
            )}
        </div>
    )
}

export default Categories
