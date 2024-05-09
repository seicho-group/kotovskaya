import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import { Product, ProductDTO } from "src/shared/types/productDTO"

export const getOrderRequestByFormValues = (
  formValues: OrderForm,
  positions: Product[],
) => {
  return {
    positions: positions,
    ...formValues,
  }
}
