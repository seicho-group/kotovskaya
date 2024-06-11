import { OrderForm } from "src/packages/desktop/features/create-order/model/order-form"
import {
  DeliveryWay,
  Order,
  ProductOrderRequest,
} from "src/shared/types/productDTO"
import { normalizePhone } from "src/pages/cart-page/lib/cart-form-validators"

export const getOrderRequestByFormValues = (
  formValues: OrderForm,
  positions: ProductOrderRequest[],
): Order => {
  return {
    positions,
    authorPhone: normalizePhone(formValues.phone),
    authorName: formValues.name,
    authorMail: formValues.email,
    comment: formValues.comment,
    // в форме надо тип поправить
    deliveryWay: DeliveryWay.Self,
  }
}
