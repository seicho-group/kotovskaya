import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import {
  DeliveryWay,
  Product,
  ProductDTO,
  ProductOrderRequest,
} from "src/shared/types/productDTO"
import { Order } from "src/shared/types/productDTO"

export const getOrderRequestByFormValues = (
  formValues: OrderForm,
  positions: ProductOrderRequest[],
): Order => {
  return {
    positions,
    authorPhone: formValues.phone,
    authorName: formValues.name,
    authorMail: formValues.email,
    // в форме надо тип поправить
    deliveryWay: DeliveryWay.Self,
  }
}
