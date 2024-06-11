import { useQuery } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { ProductDTO } from "src/shared/types/productDTO"
import { API_URL } from "src/shared/api/config"

export const useQueryGetNewProducts = () => {
  return useQuery<ProductDTO[]>({
    queryKey: ["newProducts"],
    queryFn: async () => {
      const response = await axios.post<undefined, AxiosResponse<ProductDTO[]>>(
        `${API_URL}/products/get_new_products`,
        undefined,
      )
      return response.data
    },
    staleTime: 1000 * 60 * 15,
  })
}
