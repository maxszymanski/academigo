import { create } from 'zustand'

type Store = {
	isNavOpen: boolean
	toggleNavigation: () => void
	closeNavigation: () => void
}

const useAppStore = create<Store>()(set => ({
	isNavOpen: false,

	toggleNavigation: () => set(state => ({ isNavOpen: !state.isNavOpen })),
	closeNavigation: () => set({ isNavOpen: false }),
}))

export default useAppStore
