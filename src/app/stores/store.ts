import { create } from 'zustand'

type Store = {
	isNavOpen: boolean
	toggleNavigation: () => void
}

const useAppStore = create<Store>()(set => ({
	isNavOpen: false,

	toggleNavigation: () => set(state => ({ isNavOpen: !state.isNavOpen })),
}))

export default useAppStore
