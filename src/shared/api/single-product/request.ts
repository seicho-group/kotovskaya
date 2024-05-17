import axios, { AxiosResponse } from "axios"
import { API_URL, API_URL_PRODUCTS } from "../config"
import { ProductDTO } from "src/shared/types/productDTO"

export type GetProductInfoRequest = {
  productId: string
}

export async function requestProduct(id: string) {
  return await axios
    .post<
      GetProductInfoRequest,
      AxiosResponse<ProductDTO>
    >(`${API_URL_PRODUCTS}/get_product_info/${id}`, { productId: null })
    .then((response) => {
      return response.data
    })
}
