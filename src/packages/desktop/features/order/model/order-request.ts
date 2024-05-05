import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import { ProductDTO } from "src/shared/types/productDTO"

export const getOrderRequestByFormValues = (
  formValues: OrderForm,
  positions: ProductDTO[],
) => {
  return {
    positions: positions,
    ...formValues,
  }
}
