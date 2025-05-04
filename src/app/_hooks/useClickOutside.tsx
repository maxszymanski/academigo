import { useEffect } from 'react'

export default function useClickOutside(
	ref: React.RefObject<HTMLDivElement | null> | null,
	mutation: () => void,
	buttonID: string
) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			const target = e.target as HTMLElement

			if (target.id === buttonID || !ref?.current) return

			if (ref?.current && !ref.current.contains(target)) {
				setTimeout(() => mutation(), 100)
				// mutation()
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [ref, mutation, buttonID])
}
