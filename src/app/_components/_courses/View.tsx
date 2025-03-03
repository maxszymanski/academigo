'use client'
import { FaList } from 'react-icons/fa'
import Button from '../_ui/Button'

import { RxDashboard } from 'react-icons/rx'
import useAppStore from '@/app/stores/store'

function View() {
    const cardView = useAppStore((state) => state.cardView)
    const setCardView = useAppStore((state) => state.setCardView)
    return (
        <div className="hidden items-center gap-5 md:flex md:gap-2">
            <Button
                variant="view"
                onClick={() => setCardView('list')}
                isActive={cardView === 'list'}
            >
                <FaList className="size-8" />
            </Button>
            <Button
                variant="view"
                onClick={() => setCardView('card')}
                isActive={cardView === 'card'}
            >
                <RxDashboard className="size-8" />
            </Button>
        </div>
    )
}

export default View
