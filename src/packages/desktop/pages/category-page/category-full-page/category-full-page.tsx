import "./category-full-page.css"
import { ProductDTO } from "../../../../../shared/types/productDTO"
import { Subactegory } from "../../../entities/subcategory/subcategory"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { useState } from "react"
import { Product } from "../../../../../shared/types/productDTO"
import { ProductCard } from "src/packages/desktop/entities/product-card/product-card"

export function CategoryFullPage(props: any) {
  const [mockArray, setMockArray] = useState<any[]>([])
  const [productsArray, setProductArray] = useState<ProductDTO[]>([])
  let { id } = useParams<{ id: string }>()
  useEffect(() => {
    axios
      .post(`${API_URL}/categories/get_category`, { category_id: id })
      .then((res) => {
        console.log(res)
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

  const found = mockArray.find((element: any) => element.category_id == id)
  // const productsArray: ProductDTO[] = props.array
  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div className="wrapper">{found?.category_name}</div>
      </div>
      <div className="productspromo__subcategories__wrapper">
        <div className="productspromo__subcategories">
          {found?.category_items?.map((element: any) => (
            <Subactegory
              key={element.category_id}
              subcategory={element.category_name}
            />
          ))}
        </div>
      </div>
      <div className="productspromo__main">
        <div className="categorypage__grid">
          {productsArray.map((product: ProductDTO) => (
            <ProductCard
              id={product.id}
              name={product.name}
              price={product?.salePrices?.[0]?.value}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
