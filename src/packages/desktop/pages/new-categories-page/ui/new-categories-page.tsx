import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { useQuery } from "@tanstack/react-query"

export const useQueryNewProducts = () => {
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

export function NewCategoriesPage() {
  const { data: newFullArray = [] } = useQueryNewProducts()
  return (
    <div>
      <ProductsList categoryName="Новинки" productsArray={newFullArray} />
    </div>
  )
}
