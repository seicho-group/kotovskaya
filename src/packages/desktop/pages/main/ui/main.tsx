import "./main.css"
import { Slider } from "src/shared/ui/slider/ui/slider"
import { ProductsList } from "../../../widgets/products-list/ui/products-list"
import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "src/shared/api/config"
import { ProductDTO } from "src/shared/types/productDTO"
import { useInView } from "react-intersection-observer"
import { useQueryNewProducts } from "src/packages/desktop/pages/new-categories-page/ui/new-categories-page"

export function Main() {
  const [popularArray, setPopularArray] = useState<ProductDTO[]>([])

  const { data: newArray = [] } = useQueryNewProducts()

  useEffect(() => {
    axios
      .get<ProductDTO[]>(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        setPopularArray(response.data)
      })
  }, [])
  return (
    <div className="main">
      <Slider />
      <ProductsList
        categoryName={"Новинки"}
        productsArray={newArray}
        linkTo={"/new"}
      />
      <ProductsList
        categoryName={"Популярное"}
        productsArray={popularArray}
        linkTo={"/popular"}
      />
    </div>
  )
}
