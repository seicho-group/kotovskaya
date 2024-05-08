import { useEffect, useState } from "react"
import { CategoryPage } from "../../category-page/category-page"
import axios from "axios"
import { API_URL } from "../../../../../shared/api/config"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"

export function NewCategoriesPage() {
  const [newFullArray, setNewFullArray] = useState<ProductDTO[]>([])
  useEffect(() => {
    axios
      .get<ProductDTO[]>(`${API_URL}/products/new`, {
        withCredentials: true,
      })
      .then((response) => {
        setNewFullArray(response.data)
      })
  }, [])
  return (
    <div>
      <ProductsList categoryName="Новинки" productsArray={newFullArray} />
    </div>
  )
}
