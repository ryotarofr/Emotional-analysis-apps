import { create } from "zustand";

interface TextStore {
  analysisId: string[];
  selectedId: string | null;
  setAnalysisId: (naiseiId: any[]) => void;
  setSelectedId: (naiseiId: any) => void;
};

export const useGetTextById = create<TextStore>((set) => ({
  analysisId: [""],
  selectedId: null,
  setAnalysisId: (analysisId) => set({ analysisId }),
  setSelectedId: (analysisId) => set({ selectedId: analysisId }),
}));
