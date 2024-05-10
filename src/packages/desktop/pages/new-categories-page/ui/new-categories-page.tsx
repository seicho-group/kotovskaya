import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { useQueryGetNewProducts } from "src/shared/api/use-query-get-new-products"

export function NewCategoriesPage() {
  const { data: newFullArray = [] } = useQueryGetNewProducts()
  return (
    <div>
      <ProductsList categoryName="Новинки" productsArray={newFullArray} />
    </div>
  )
}
