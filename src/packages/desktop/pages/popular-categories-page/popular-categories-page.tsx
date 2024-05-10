import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { useQueryGetPopularProducts } from "src/shared/api/use-query-get-popular-products"

export function PopularCategoriesPage() {
  const { data: popularProducts = [] } = useQueryGetPopularProducts()
  return (
    <div>
      <ProductsList categoryName="Популярное" productsArray={popularProducts} />
    </div>
  )
}
