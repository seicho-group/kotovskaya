import "./show-all-results.css"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { useSearchStore } from "src/packages/mobile/widgets/search-mobile/ui/search-mobile"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductCard } from "../../entities/product-card/product-card"

export function ShowAllResults() {
  const [productsSearchResultAll, setProductsSearchResultAll] = useState<
    ProductDTO[]
  >([])
  const { searchRequest, setWord } = useSearchStore()

  useEffect(() => {
    axios
      .post(`${API_URL}/products/search_for_product`, {
        text: searchRequest,
      })
      .then((res) => {
        setProductsSearchResultAll(res.data)
      })
  }, [])

  return (
    <>
      <div className="productspromo__main">
        <div>
          <div className="search__results__header">Результаты поиска</div>
          <div className="categorypage__grid">
            {productsSearchResultAll.map((product: ProductDTO) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
