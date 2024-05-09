export type ProductDTO = {
  name: string
  salePrices?: { value: number }[]
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

// type Product = {
//   name: string;
//   price: number;
//   id: string;
//   image: string;
//   quantity: number;
// };
