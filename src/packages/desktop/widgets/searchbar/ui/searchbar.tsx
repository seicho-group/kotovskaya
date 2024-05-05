import { createPortal } from "react-dom"
import "./searchbar.css"
import { SearchProduct } from "../../../entities/search-product/search-product"
import { SearchCategory } from "../../../entities/search-category/search-category"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../../../../shared/api/config"
import { useDebounce } from "../../../../../shared/hooks/use-debounce"
import { Product } from "../../../../../shared/types/product"
import { Link } from "react-router-dom"

export function Searchbar(props: any) {
  const setIsClicked = props.SetIsClicked
  const [inputState, setInputState] = useState<string>("")
  const debouncedValue = useDebounce(inputState)
  const [popularArrayForSearch, setPopularArrayForSearch] = useState<Product[]>(
    [],
  )
  const [searchProductsResult, setProductsSearchResult] = useState<any>(null)
  useEffect(() => {
    axios
      .get(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        setPopularArrayForSearch(response.data)
      })
  }, [])
  console.log(popularArrayForSearch)
  useEffect(() => {
    if (debouncedValue) {
      axios
        .post(`${API_URL}/products/search_for_product`, {
          text: debouncedValue,
        })
        .then((res) => {
          setProductsSearchResult(res.data)
        })
    }
  }, [debouncedValue])

  return createPortal(
    <div className="search">
      <div className="search__wrapper">
        <div>
          <input
            onChange={(event) => setInputState(event.target.value)}
            className="searchinput"
            type="search"
            placeholder="Поиск..."
          />
        </div>

        <div className="search__results">
          <div>
            {searchProductsResult !== null
              ? searchProductsResult.map((product: Product) => (
                  <SearchProduct
                    setIsClicked={setIsClicked}
                    name={product.name}
                    id={product.id}
                  />
                ))
              : popularArrayForSearch.map((product: Product) => (
                  <SearchProduct
                    setIsClicked={setIsClicked}
                    name={product.name}
                    id={product.id}
                  />
                ))}
          </div>
          <Link onClick={() => setIsClicked(false)} to={"/searchresults"}>
            <div className="showallresults">Показать все результаты</div>
          </Link>
          {/* <div>
            <SearchCategory/>
            <SearchCategory/>
            <SearchCategory/>
        </div> */}
        </div>
      </div>
    </div>,
    document.body,
  )
}
