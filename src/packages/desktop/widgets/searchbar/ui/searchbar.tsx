import { createPortal } from "react-dom"
import "./searchbar.css"
import { SearchProductCard } from "src/widgets/search-product-card/search-product-card"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { useDebounce } from "src/shared/utils/hooks/use-debounce"
import { ProductDTO } from "src/shared/types/productDTO"
import { Link, useNavigate } from "react-router-dom"
import { useSearchStore } from "src/entities/searchbar/model/use-search-store"

export function Searchbar(props: any) {
  const { setWord } = useSearchStore()
  const setIsClicked = props.setIsClicked
  const [inputState, setInputState] = useState<string>("")
  const debouncedValue = useDebounce(inputState)
  const [searchProductsResult, setProductsSearchResult] = useState<any>(null)

  useEffect(() => {
    if (debouncedValue) {
      axios
        .post(`${API_URL}/products/search_for_products`, {
          searchString: debouncedValue,
        })
        .then((res) => {
          setProductsSearchResult(res.data)
        })
    }
  }, [debouncedValue])

  const navigate = useNavigate()
  const onInputSubmit = () => {
    setWord(inputState || "")
    setIsClicked(false)
    document.body.style.overflow = "auto"
    navigate("/searchresults")
  }

  return createPortal(
    <div
      className="search_on_click"
      onClick={() => {
        document.body.style.overflow = "auto"
        setIsClicked(false)
      }}
    >
      <div className="search" onClick={(e) => e.stopPropagation()}>
        <div className="search__wrapper">
          <form
            onSubmit={onInputSubmit}
            style={{ display: "grid", placeItems: "center" }}
          >
            <input
              onChange={(event) => setInputState(event.target.value)}
              onSubmit={onInputSubmit}
              className="searchinput"
              type="text"
              placeholder="Поиск..."
            />
          </form>

          <div className="search__results">
            {(searchProductsResult || [])
              .filter((product: any) => product.salePrice > 0)
              .map((product: ProductDTO) => (
                <SearchProductCard
                  setIsClicked={setIsClicked}
                  name={product.name}
                  imageLink={product.imageLink}
                  id={product.id}
                  key={product.id}
                />
              ))}
            {searchProductsResult?.length > 0 && (
              <div onClick={onInputSubmit} className="showallresults">
                Показать все результаты
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
