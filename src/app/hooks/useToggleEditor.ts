import { create } from 'zustand';

interface useToggleStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useToggleEditor = create<useToggleStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
