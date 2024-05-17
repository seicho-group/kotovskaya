export type ProductDTO = {
  name: string
  description?: string
  salePrices: { value: number }[]
  id: string
  quantity: number
}

export type Product = {
  name: string
  price: number
  id: string
  image: string
  quantity: number
  accumulator: number
}

export type ProductOrderRequest = {
  id: string
  quantity: number
}

// type Product = {
//   name: string;
//   price: number;
//   id: string;
//   image: string;
//   quantity: number;
// };

// export type DeliveryWay = {}

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
  positions: ProductDTO[]
}
