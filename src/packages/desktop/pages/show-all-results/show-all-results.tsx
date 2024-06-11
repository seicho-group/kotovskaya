import "./show-all-results.css"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { useSearchStore } from "src/packages/mobile/widgets/search-mobile/ui/search-mobile"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductCard } from "src/widgets/product-card/product-card"
import { ProductsList } from "src/widgets/products-list/ui/products-list"

export function ShowAllResults() {
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
  }, [searchRequest])

  return (
    <>
      <div className="productsListMain">
        <div>
          <div className="search__results__header">Результаты поиска</div>
          <ProductsList productsArray={productsSearchResultAll} />
        </div>
      </div>
    </>
  )
}
