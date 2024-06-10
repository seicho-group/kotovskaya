import "./main.css"
import { Slider } from "src/shared/ui/slider/ui/slider"
import { ProductsList } from "../../../widgets/products-list/ui/products-list"
import { useQueryGetNewProducts } from "src/shared/api/use-query-get-new-products"
import { useQueryGetPopularProducts } from "src/shared/api/use-query-get-popular-products"
import { Helmet } from "react-helmet"
import { MainPageNavigation } from "src/widgets/main-page-navigation/main-page-navigation"

export function Main() {
  const { data: newProducts = [] } = useQueryGetNewProducts()
  const { data: popularProducts = [] } = useQueryGetPopularProducts()

  return (
    <div className="main">
      <Helmet title={"Мыловарня Мадам Котовской"} />
      <Slider />
      <MainPageNavigation />
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
