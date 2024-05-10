import "./main.css"
import { Slider } from "src/shared/ui/slider/ui/slider"
import { ProductsList } from "../../../widgets/products-list/ui/products-list"
import { useQueryGetNewProducts } from "src/shared/api/use-query-get-new-products"
import { useQueryGetPopularProducts } from "src/shared/api/use-query-get-popular-products"

export function Main() {
  const { data: newProducts = [] } = useQueryGetNewProducts()
  const { data: popularProducts = [] } = useQueryGetPopularProducts()

  return (
    <div className="main">
      <Slider />
      <ProductsList
        categoryName={"Новинки"}
        productsArray={newProducts}
        linkTo={"/new"}
      />
      <ProductsList
        categoryName={"Популярное"}
        productsArray={popularProducts}
        linkTo={"/popular"}
      />
    </div>
  )
}
