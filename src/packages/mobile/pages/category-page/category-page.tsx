import "./category-page.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { ProductDTO } from "src/shared/types/productDTO"
import { useParams } from "react-router-dom"
import {
  API_URL,
  API_URL_CATEGORIES,
  API_URL_PRODUCTS,
} from "src/shared/api/config"
import { CategoryPanel } from "src/packages/mobile/entities/category-panel"
import { ProductCardMobile } from "src/packages/mobile/entities/product-card-mobile"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"
import { searchObject } from "src/shared/utils/get-deep-object-by-id"

export function CategoryPageMobile() {
  const [productsArray, setProductArray] = useState<ProductDTO[]>([])
  const [categoryName, setCategoryName] = useState("")
  const [categoryChildren, setCategoryChildren] = useState([])
  const [mockArray, setMockArray] = useState<any[]>([])

  let { id } = useParams<{ id: string }>()
  const found = searchObject(mockArray, id || "", "category_items") as Category
  useEffect(() => {
    axios
      .post(`${API_URL_CATEGORIES}/get_category_items`, { categoryId: id })
      .then((res) => {
        setProductArray(res.data.categoryItems)
        setCategoryName(res.data.categoryName)
        setCategoryChildren(res.data.categoryChildren)
      })
  }, [id])
  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/categories/get_all`, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       setMockArray(response.data)
  //     })
  // }, [])
  // const found = mockArray.find(
  //   (element: any) => element.category_id == id,
  // ) as Category
  // const name = found?.category_name

  return (
    <div>
      <div className="mobile__wrapper">
        {/* <p className="category__name">{name}</p> */}

        <ProductsList
          productsArray={productsArray}
          categoryName={categoryName}
          subcategoryArray={categoryChildren}
        />
      </div>
    </div>
  )
}
