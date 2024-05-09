import { Product } from "src/shared/types/productDTO"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartState = {
  cart: Record<string, Product>
  incrementById: (id: string) => void
  decrementById: (id: string) => void
  deleteProduct: (id: string) => void
  setNewProduct: (product: Product) => void
}

export const useCartStore = create(
  persist<CartState>(
    (set, getState) => ({
      cart: {},
      incrementById: (id: string) => {
        const state = { ...getState().cart }
        state[id].accumulator = state[id].accumulator + 1

        set({ cart: state })
      },
      decrementById: (id: string) => {
        const state = { ...getState().cart }
        state[id].accumulator = state[id].accumulator - 1

        if (state[id].accumulator < 0) {
          console.log("почему то убираем из корзины то чего в ней нет лол")
        }

        set({ cart: state })
      },
      setNewProduct: (product: Product) => {
        const newState = getState().cart
        if (newState[product.id]) {
          return
        }
        newState[product.id] = product
        set({ cart: newState })
      },
      deleteProduct: (id: string) => {
        const state = { ...getState().cart }
        delete state[id]
        set({ cart: state })
      },
    }),
    { name: "cart" },
  ),
)
