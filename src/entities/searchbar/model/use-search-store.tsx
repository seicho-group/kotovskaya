import { create } from "zustand"

type TSearchStore = {
  searchRequest: string
  setWord: (input: string) => void
}

export const useSearchStore = create<TSearchStore>((set) => ({
  searchRequest: "",
  setWord: (searchRequest: string) =>
    set(() => ({ searchRequest: searchRequest })),
}))
