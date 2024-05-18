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
