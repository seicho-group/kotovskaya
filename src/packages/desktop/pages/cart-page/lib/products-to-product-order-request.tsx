import { Product, ProductOrderRequest } from "src/shared/types/productDTO"

export const productsToProductOrderRequest = (
  array: Product[],
): ProductOrderRequest[] => {
  return array.map((product: Product) => {
    return {
      productId: product.id,
      quantity: product.accumulator,
    }
  })
}