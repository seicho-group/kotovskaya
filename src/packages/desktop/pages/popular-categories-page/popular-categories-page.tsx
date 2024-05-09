import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { ProductDTO } from "src/shared/types/productDTO"

export function PopularCategoriesPage() {
  const [popularFullArray, setPopularFullArray] = useState<ProductDTO[]>([])
  useEffect(() => {
    axios
      .get<ProductDTO[]>(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        setPopularFullArray(response.data)
      })
  }, [])
  return (
    <div>
      <ProductsList
        categoryName="Популярное"
        productsArray={popularFullArray}
      />
    </div>
  )
}
