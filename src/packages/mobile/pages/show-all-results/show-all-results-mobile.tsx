import { useEffect, useState } from "react"
import axios from "axios"
import { useSearchStore } from "src/packages/mobile/widgets/search-mobile/ui/search-mobile"
import { ProductDTO } from "src/shared/types/productDTO"
import { API_URL } from "src/shared/api/config"
import { ProductCardMobile } from "src/packages/mobile/entities/product-card-mobile"

export function ShowAllResultsMobile() {
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
    <div className="mobile__wrapper">
      <div className="productspromo__grid__mobile">
        {productsSearchResultAll.map((product: ProductDTO) => (
          <ProductCardMobile
            name={product?.name}
            id={product?.id}
            price={product.salePrices?.[0].value}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  )
}
