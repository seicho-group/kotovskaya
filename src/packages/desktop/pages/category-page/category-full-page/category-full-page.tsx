import "./category-full-page.css"
import { ProductDTO } from "src/shared/types/productDTO"
import { Subactegory } from "../../../entities/subcategory/subcategory"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { useState } from "react"
import { ProductCard } from "src/packages/desktop/entities/product-card/product-card"
import { searchObject } from "src/shared/utils/get-deep-object-by-id"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"

export function CategoryFullPage() {
  const [mockArray, setMockArray] = useState<any[]>([])
  const [productsArray, setProductArray] = useState<ProductDTO[]>([])
  let { id } = useParams<{ id: string }>()
  useEffect(() => {
    axios
      .post(`${API_URL}/categories/get_category`, { category_id: id })
      .then((res) => {
        setProductArray(res.data)
      })
  }, [id])
  useEffect(() => {
    axios
      .get(`${API_URL}/categories/get_all`, {
        withCredentials: true,
      })
      .then((response) => {
        setMockArray(response.data)
      })
  }, [])

  const found = searchObject(mockArray, id || "", "category_items") as Category

  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div className="productspromo__wrapper">{found?.category_name}</div>
      </div>
      <div className="productspromo__subcategories__wrapper">
        <div className="productspromo__subcategories">
          {found?.category_items?.map((element: any) => (
            <Subactegory
              id={element.category_id}
              key={element.category_id}
              subcategory={element.category_name}
            />
          ))}
        </div>
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
