import { useMutation } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { Order, Product } from "src/shared/types/productDTO"
import { API_URL } from "src/shared/api/config"
import { getOrderRequestByFormValues } from "src/packages/desktop/features/order/model/order-request"
import { OrderForm } from "src/packages/desktop/features/order/model/order-form"

import { productsToProductOrderRequest } from "src/packages/desktop/pages/cart-page/lib/products-to-product-order-request"

export const useMutationCreateOrder = () => {
  return useMutation<string, Error, { formValues: OrderForm; cart: Product[] }>(
    {
      mutationFn: async ({ formValues, cart }) => {
        const result = await axios.post<Order, AxiosResponse<string>>(
          `${API_URL}/order/create_order`,
          getOrderRequestByFormValues(
            formValues,
            productsToProductOrderRequest(cart),
          ),
        )

        return result.data
      },
    },
  )
}
