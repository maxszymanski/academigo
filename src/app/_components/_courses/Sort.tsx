'use client'
import { FaChevronDown } from 'react-icons/fa'
import Button from '../_ui/Button'

function Sort() {
    return (
        <div className="flex items-center gap-3.5">
            <Button
                onClick={() => console.log('siema')}
                variant="filter"
                restClass="lg:hidden"
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
