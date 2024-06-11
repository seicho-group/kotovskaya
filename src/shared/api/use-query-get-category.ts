import { ProductDTO } from "src/shared/types/productDTO"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { API_URL_CATEGORIES } from "src/shared/api/config"

export type TCategoryData = {
  categoryItems: ProductDTO[]
  categoryChildren: Category[]
  categoryName: string
}

export const useQueryGetCategory = (id: string) => {
  return useQuery({
    queryKey: ["get_category_info", id],
    queryFn: async () => {
      const response = await axios.post<
        { categoryId: string },
        AxiosResponse<TCategoryData>
      >(`${API_URL_CATEGORIES}/get_category_items`, { categoryId: id })
      return response.data
    },
    staleTime: 1000 * 60 * 60,
  })
}
