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
    fullHeightSubCategories: boolean
    fullHeightSpecialization: boolean
    setFullHeightSubCategories: () => void
    setFullHeightSpecialization: () => void
}

const useAppStore = create<Store>()((set) => ({
    isNavOpen: false,
    cardView: 'card',
    openModal: null,
    fullHeightSubCategories: false,
    fullHeightSpecialization: false,

    toggleNavigation: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
    closeNavigation: () => set({ isNavOpen: false }),
    setCardView: (view) => set({ cardView: view }),
    setOpenModal: (modalType) => set({ openModal: modalType }),
    closeModal: () => set({ openModal: null }),
    setFullHeightSubCategories: () =>
        set((state) => ({
            fullHeightSubCategories: !state.fullHeightSubCategories,
        })),
    setFullHeightSpecialization: () =>
        set((state) => ({
            fullHeightSpecialization: !state.fullHeightSpecialization,
        })),
}))

export default useAppStore
