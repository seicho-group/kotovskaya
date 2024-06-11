import { ProductsList } from "src/widgets/products-list/ui/products-list"
import { useQueryGetPopularProducts } from "src/shared/api/use-query-get-popular-products"
import { Helmet } from "react-helmet"
import { CategoryInfo } from "src/widgets/category-info/category-info"
import { Loader } from "src/widgets/loader/loader"

export function PopularCategoriesPage() {
  const { data: popularProducts = [], isPending } = useQueryGetPopularProducts()
  if (isPending) {
    return <Loader />
  }
  return (
    <div style={{ margin: "50px 0" }}>
      <Helmet title={"Популярное"} />
      <CategoryInfo categoryName="Популярное" productsArray={popularProducts} />
    </div>
  )
}
