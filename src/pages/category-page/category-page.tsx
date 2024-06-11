import "./category-page.css"
import { ProductDTO } from "src/shared/types/productDTO"
import { useParams } from "react-router-dom"
import axios, { AxiosResponse } from "axios"
import { API_URL_CATEGORIES } from "src/shared/api/config"
import { ProductsList } from "src/widgets/products-list/ui/products-list"
import { useQuery } from "@tanstack/react-query"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"
import { useQueryGetCategory } from "src/shared/api/use-query-get-category"
import { CategoryInfo } from "src/widgets/category-info/category-info"

export function CategoryPage() {
  const { id } = useParams<{ id: string }>()
  const { data, isPending } = useQueryGetCategory(id!)

  if (isPending) {
    return <div className={"productsListContainer"}>Loading...</div>
  }
  if (!data) {
    return (
      <div className={"productsListContainer"}>
        Произошла ошибка, перезагрузите страницу
      </div>
    )
  }
  return (
    <div style={{ margin: "20px 0 " }}>
      <CategoryInfo
        productsArray={data.categoryItems}
        subcategoryArray={data.categoryChildren}
        categoryName={data.categoryName}
      />
    </div>
  )
}
