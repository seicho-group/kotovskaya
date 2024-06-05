import "./category-full-page.css"
import { ProductDTO } from "src/shared/types/productDTO"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import { API_URL_CATEGORIES } from "src/shared/api/config"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { useQuery } from "@tanstack/react-query"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"

type TCategoryData = {
  categoryItems: ProductDTO[]
  categoryChildren: Category[]
  categoryName: string
}

const useQueryGetCategory = (id: string) => {
  return useQuery({
    queryKey: ["get_category_info", id],
    queryFn: async () => {
      const response = await axios.post<
        { categoryId: string },
        AxiosResponse<TCategoryData>
      >(`${API_URL_CATEGORIES}/get_category_items`, { categoryId: id })
      return response.data
    },
    staleTime: 1000 * 60 * 60,
  })
}

export function CategoryFullPage() {
  const { id } = useParams<{ id: string }>()
  const { data, isPending } = useQueryGetCategory(id!)

  if (isPending) {
    return <div className={"productspromo"}>Loading...</div>
  }
  if (!data) {
    return (
      <div className={"productspromo"}>
        Произошла ошибка, перезагрузите страницу
      </div>
    )
  }
  return (
    <div className="productspromo">
      <ProductsList
        productsArray={data.categoryItems}
        subcategoryArray={data.categoryChildren}
        categoryName={data.categoryName}
      />
    </div>
  )
}
