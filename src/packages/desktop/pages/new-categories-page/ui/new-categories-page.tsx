import { useQueryGetNewProducts } from "src/shared/api/use-query-get-new-products"
import { Helmet } from "react-helmet"
import { CategoryInfo } from "src/widgets/category-info/category-info"
import { Loader } from "src/widgets/loader/loader"

export function NewCategoriesPage() {
  const { data: newFullArray = [], isPending } = useQueryGetNewProducts()
  if (isPending) {
    return <Loader />
  }
  return (
    <div style={{ margin: "50px 0" }}>
      <Helmet title={"Новинки"} />
      <CategoryInfo categoryName={"Новинки"} productsArray={newFullArray} />
    </div>
  )
}
