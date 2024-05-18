import "../../widgets/products-list/ui/products-list.css"
import mock from "src/shared/assets/mock.png"
import { ProductCard } from "../../entities/product-card/product-card"
import "./category-page.css"
import { ProductDTO } from "src/shared/types/productDTO"
import { useParams } from "react-router-dom"
import { API_URL } from "src/shared/api/config"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { API_URL_CATEGORIES } from "src/shared/api/config"

export function CategoryPage(props: any) {
  const [productsArray, setProductArray] = useState<ProductDTO[]>([])
  let { id } = useParams<{ id: string }>()
  useEffect(() => {
    axios
      .post(`${API_URL_CATEGORIES}/get_category_items`, { categoryId: id })
      .then((res) => {
        setProductArray(res.data.categoryChildren)
      })
  }, [id])
  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div className="wrapper">{props.category}</div>
      </div>
      <div className="productspromo__main">
        <div className="categorypage__grid">
          {productsArray.map((product: ProductDTO) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
