import "./show-all-results.css"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { ProductDTO } from "src/shared/types/productDTO"
import { CategoryInfo } from "src/widgets/category-info/category-info"
import { useSearchStore } from "src/entities/searchbar/model/use-search-store"

export function ShowAllResults() {
  const [productsSearchResultAll, setProductsSearchResultAll] = useState<
    ProductDTO[]
  >([])
  const { searchRequest } = useSearchStore()
  // todo: rq
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
    <div style={{ margin: "50px 0" }}>
      <CategoryInfo
        categoryName={`Результаты поиска: ${searchRequest}`}
        productsArray={productsSearchResultAll}
      />
    </div>
  )
}
