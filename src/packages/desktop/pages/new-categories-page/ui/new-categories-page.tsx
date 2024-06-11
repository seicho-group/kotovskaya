import { ProductsList } from "src/widgets/products-list/ui/products-list"
import { useQueryGetNewProducts } from "src/shared/api/use-query-get-new-products"
import { Helmet } from "react-helmet"
import { Text } from "src/shared/ui/text/text"
import { ContentWrapper } from "src/widgets/content-wrapper/content-wrapper"

export function NewCategoriesPage() {
  const { data: newFullArray = [] } = useQueryGetNewProducts()
  return (
    <ContentWrapper>
      <Helmet title={"Новинки"} />
      <Text variant={"subtitle"}>Новинки</Text>
      <ProductsList productsArray={newFullArray} />
    </ContentWrapper>
  )
}
