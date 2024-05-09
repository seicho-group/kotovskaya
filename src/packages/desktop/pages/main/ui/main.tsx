import "./main.css"
import { Slider } from "src/shared/ui/slider/ui/slider"
import { ProductsList } from "../../../widgets/products-list/ui/products-list"
import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "src/shared/api/config"
import { ProductDTO } from "src/shared/types/productDTO"

export function Main() {
  const [newArray, setNewArray] = useState<ProductDTO[]>([])
  const [popularArray, setPopularArray] = useState<ProductDTO[]>([])

  useEffect(() => {
    axios
      .get<ProductDTO[]>(`${API_URL}/products/new`, { withCredentials: true })
      .then((response) => {
        setNewArray(response.data)
      })
  }, [])

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
      {/*<ProductsList category={"Распродажа"} array={[]} link={"sale"} />*/}
    </div>
  )
}
