import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { ProductsList } from "src/widgets/products-list/ui/products-list"
import { ProductDTO } from "src/shared/types/productDTO"
import { Helmet } from "react-helmet"

export function SalesPage() {
  const [salesFullArray, setSalesFullArray] = useState<ProductDTO[]>([])
  useEffect(() => {
    axios
      .get(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        setSalesFullArray(response.data)
      })
  }, [])
  return (
    <div>
      <Helmet title={"Распродажа"} />
      <ProductsList categoryName="Распродажа" productsArray={salesFullArray} />
    </div>
  )
}
