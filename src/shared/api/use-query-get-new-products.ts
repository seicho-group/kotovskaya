import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ProductDTO } from "src/shared/types/productDTO"
import { API_URL } from "src/shared/api/config"

export const useQueryGetNewProducts = () => {
  return useQuery({
    queryKey: ["newProducts"],
    queryFn: async () => {
      const response = await axios.get<ProductDTO[]>(
        `${API_URL}/products/new`,
        {
          withCredentials: true,
        },
      )
      return response.data
    },
    staleTime: 1000 * 60 * 15,
  })
}
