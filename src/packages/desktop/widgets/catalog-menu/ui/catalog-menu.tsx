import "./catalog-menu.css"
import { useState, useEffect } from "react"
import { CatalogItem } from "../../../entities/product-card/catalog-item"
import axios, { AxiosResponse } from "axios"
import { API_URL } from "src/shared/api/config"
import { useQuery } from "@tanstack/react-query"

export type TCategory = {
  category_id: string
  category_name: string
  category_items: TCategory[] | null
}

const soapmaking = [
  "Эфирные масла",
  "Базовые масла",
  "Инcтрументы и приспособления",
  "Мыльная основа",
  "Щелочь",
  "Формы",
]
const soapmaking2 = [
  "Красители",
  "Отдушки",
  "Инструменты и приспособления",
  "Люфа, скрабы, сухоцветы",
]
const soapmaking3 = [
  "Упаковка",
  "Тара",
  "Водорастворимая бумага",
  "ПАВы",
  "Штампы для мыла",
]
const candlesMaking = ["Все для свечей"]
const cosmeticsMaking = ["Компоненты для косметики"]

const useCategories = () => {
  return useQuery<TCategory[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get<TCategory[]>(
        `${API_URL}/categories/get_all`,
        {
          withCredentials: true,
        },
      )
      return response.data
    },
    staleTime: 1000 * 60 * 60,
  })
}

const mapCategoriesToUI = (
  categories: TCategory[],
  filterStrings: string[],
) => {
  return categories
    .filter((product) => filterStrings.includes(product.category_name))
    .map((product) => (
      <CatalogItem
        id={product.category_id}
        key={product.category_id}
        category={product.category_name}
        subcategory={product.category_items}
      />
    ))
}

export function CatalogMenu(props: any) {
  const { data: categories = [], isPending } = useCategories()

  if (isPending) {
    return (
      <div className="menu">
        <div className="catalog__row">Loading...</div>
      </div>
    )
  }

  return (
    <div className="menu">
      <div className="catalog__row">
        <p className="catalog__h1">Мыловарение</p>
        {mapCategoriesToUI(categories, soapmaking)}
      </div>
      <div className="catalog__row__noh1">
        {mapCategoriesToUI(categories, soapmaking2)}
      </div>
      <div className="catalog__row__noh1">
        {mapCategoriesToUI(categories, soapmaking3)}
      </div>
      <div>
        <div style={{ marginBottom: "50px" }} className="catalog__row">
          <p className="catalog__h1">Cвечеварение</p>
          {mapCategoriesToUI(categories, candlesMaking)}
        </div>
        <div className="catalog__row">
          <p className="catalog__h1">Косметика ручной работы</p>
          {mapCategoriesToUI(categories, cosmeticsMaking)}
        </div>
      </div>
    </div>
  )
}
