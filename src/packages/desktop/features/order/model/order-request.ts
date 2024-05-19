import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import {
  DeliveryWay,
  Product,
  ProductDTO,
  ProductOrderRequest,
} from "src/shared/types/productDTO"
import { Order } from "src/shared/types/productDTO"
import {
  formatPhone,
  normalizePhone,
} from "src/packages/desktop/pages/cart-page/lib/cart-form-validators"

export const getOrderRequestByFormValues = (
  formValues: OrderForm,
  positions: ProductOrderRequest[],
): Order => {
  console.log(normalizePhone(formValues.phone))
  return {
    positions,
    authorPhone: normalizePhone(formValues.phone),
    authorName: formValues.name,
    authorMail: formValues.email,
    // в форме надо тип поправить
    deliveryWay: DeliveryWay.Self,
  }
}
