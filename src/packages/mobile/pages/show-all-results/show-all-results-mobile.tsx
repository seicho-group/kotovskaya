import { useEffect, useState } from "react"
import axios from "axios"
import { useSearchStore } from "src/packages/mobile/widgets/search-mobile/ui/search-mobile"
import { ProductDTO } from "src/shared/types/productDTO"
import { API_URL, API_URL_PRODUCTS } from "src/shared/api/config"
import { ProductCard } from "src/widgets/product-card/product-card"

export function ShowAllResultsMobile() {
  const [productsSearchResultAll, setProductsSearchResultAll] = useState<
    ProductDTO[]
  >([])
  const { searchRequest, setWord } = useSearchStore()

  useEffect(() => {
    axios
      .post(`${API_URL}/products/search_for_products`, {
        searchString: searchRequest,
        limit: 30,
      })
      .then((res) => {
        setProductsSearchResultAll(res.data)
      })
  }, [])

  return (
    <div className="mobile__wrapper">
      <div className="productspromo__grid__mobile">
        {productsSearchResultAll.map((product: ProductDTO) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  )
}
