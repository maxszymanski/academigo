import { useEffect } from 'react'

export default function useClickOutside(
	ref: React.RefObject<HTMLDivElement | null> | null,
	mutation: () => void,
	buttonID: string
) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			const target = e.target as HTMLElement

			if (target.id === buttonID) return

			if (ref?.current && !ref.current.contains(target)) {
				setTimeout(() => mutation(), 100)
				// mutation()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, mutation, buttonID])
}
