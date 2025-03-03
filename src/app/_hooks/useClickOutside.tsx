import { useEffect } from 'react'

export default function useClickOutside(
    ref: React.RefObject<HTMLDivElement | null>,
    mutation: () => void,
    buttonID: string
) {
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            const target = e.target as HTMLElement

            if (target.id === buttonID) return

            if (ref?.current && !ref.current.contains(target)) {
                mutation()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, mutation, buttonID])
}
