import "./category-full-page.css"
import { ProductDTO } from "src/shared/types/productDTO"
import { Subcategory } from "../../../entities/subcategory/subcategory"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { useState } from "react"
import { ProductCard } from "src/packages/desktop/entities/product-card/product-card"
import { searchObject } from "src/shared/utils/get-deep-object-by-id"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { API_URL_CATEGORIES } from "src/shared/api/config"

export function CategoryFullPage() {
  const [mockArray, setMockArray] = useState<any[]>([])
  // const [mockArray, setMockArray] = useState<any[]>([])
  const [productsArray, setProductArray] = useState<ProductDTO[]>([])
  let { id } = useParams<{ id: string }>()
  useEffect(() => {
    axios
      .post(`${API_URL_CATEGORIES}/get_category_items`, { categoryId: id })
      .then((res) => {
        setProductArray(res.data.categoryItems)
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
      <ProductsList
        productsArray={productsArray}
        subcategoryArray={found?.category_items}
        categoryName={found?.category_name}
      />
    </div>
  )
}
