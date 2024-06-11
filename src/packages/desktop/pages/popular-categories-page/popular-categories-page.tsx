import { ProductsList } from "src/widgets/products-list/ui/products-list"
import { useQueryGetPopularProducts } from "src/shared/api/use-query-get-popular-products"
import { Helmet } from "react-helmet"

export function PopularCategoriesPage() {
  const { data: popularProducts = [] } = useQueryGetPopularProducts()
  return (
    <div>
      <Helmet title={"Популярное"} />
      <ProductsList categoryName="Популярное" productsArray={popularProducts} />
    </div>
  )
}
