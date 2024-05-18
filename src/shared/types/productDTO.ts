export type ProductDTO = {
  name: string
  description?: string
  salePrice: number
  oldPrice: number
  id: string
  quantity: number
  imageLink: string
}

export type Product = {
  name: string
  price: number
  id: string
  imageLink: string
  quantity: number
  accumulator: number
}

export type ProductOrderRequest = {
  productId: string
  quantity: number
}

export enum DeliveryWay {
  Self,
  Courier,
  Mail,
}

export type Order = {
  authorName: string
  authorPhone: string
  authorMail: string
  hasAuthorDiscount?: boolean
  comment?: string
  deliveryWay: DeliveryWay
  deliveryAddress?: string
  priorityOrderDate?: string
  positions: ProductOrderRequest[]
}
