import { create } from "zustand";
import axios from "axios";

const useGetAllText = create((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetch: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await axios.get(
        "/api/analysis"
      );
      set((state: any) => ({
        data: (state.data = response.data.getAllText),
        loading: false
      }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
}));

export default useGetAllText;