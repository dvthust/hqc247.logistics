import { create } from "zustand"

interface GlobalState {
    isOpenMenu: boolean
    toggleOpenMenu: () => void
}

const useGlobalStore = create<GlobalState>()((set) => ({
    isOpenMenu: false,
    toggleOpenMenu: () => set((state) => ({ isOpenMenu: !state.isOpenMenu })),
}))

export default useGlobalStore;