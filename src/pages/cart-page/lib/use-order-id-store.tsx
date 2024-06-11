import { create } from "zustand"

type TOrderIdStore = {
  orderId: string
  setOrderId: (input: string) => void
}

export const useOrderIdStore = create<TOrderIdStore>((set) => ({
  orderId: "",
  setOrderId: (orderId: string) => set(() => ({ orderId: orderId })),
}))
