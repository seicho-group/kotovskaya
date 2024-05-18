import { DeliveryWay } from "src/shared/types/productDTO"

export type OrderForm = {
  name: string
  phone: string
  email: string
  comment?: string
  deliveryWay: DeliveryWay
}
