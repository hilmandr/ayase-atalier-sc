import { create } from "zustand";

interface OpenMenu {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useOpenMenu = create<OpenMenu>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useOpenMenu;
