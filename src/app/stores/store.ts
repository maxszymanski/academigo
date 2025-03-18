import { create } from 'zustand'

type Store = {
    isNavOpen: boolean
    toggleNavigation: () => void
    closeNavigation: () => void
    cardView: string
    setCardView: (view: string) => void
    openModal: string | null
    setOpenModal: (modalType: string) => void
    closeModal: () => void
    fullHeight: boolean
    setFullHeight: () => void
}

const useAppStore = create<Store>()((set) => ({
    isNavOpen: false,
    cardView: 'card',
    openModal: null,
    fullHeight: false,

    toggleNavigation: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
    closeNavigation: () => set({ isNavOpen: false }),
    setCardView: (view) => set({ cardView: view }),
    setOpenModal: (modalType) => set({ openModal: modalType }),
    closeModal: () => set({ openModal: null }),
    setFullHeight: () => set((state) => ({ fullHeight: !state.fullHeight })),
}))

export default useAppStore
