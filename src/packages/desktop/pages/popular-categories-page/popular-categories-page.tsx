import { useEffect, useState } from "react"
import { CategoryPage } from "../category-page/category-page"
import axios from "axios"
import { API_URL } from "../../../../shared/api/config"
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
