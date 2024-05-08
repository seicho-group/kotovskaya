import "./catalog-menu.css"
import { useState, useEffect } from "react"
import { CatalogItem } from "../../../entities/product-card/catalog-item"
import axios from "axios"
import { API_URL } from "src/shared/api/config"

export type TCategory = {
  category_id: string
  category_name: string
  category_items: TCategory[] | null
}

const soapmaking = [
  "Базовые масла",
  "Инcтрументы и приспособления",
  "Мыльная основа",
  "Щелочь",
  "Формы",
]
const soapmaking2 = ["Красители", "Отдушки"]
const candlesMaking = ["Все для свечей"]
const cosmeticsMaking = ["Компоненты для косметики"]

export function CatalogMenu(props: any) {
  const [categories, setCategories] = useState<TCategory[]>([])
  useEffect(() => {
    axios
      .get(`${API_URL}/categories/get_all`, { withCredentials: true })
      .then((response) => {
        setCategories(response.data)
      })
  }, [])

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

  return (
    <div className="menu">
      <div className="catalog__row">
        <p className="catalog__h1">Мыловарение</p>
        {mapCategoriesToUI(categories, soapmaking)}
      </div>
      <div className="catalog__row__noh1">
        {mapCategoriesToUI(categories, soapmaking2)}
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Cвечеварение</p>
        {mapCategoriesToUI(categories, candlesMaking)}
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Косметика ручной работы</p>
        {mapCategoriesToUI(categories, cosmeticsMaking)}
      </div>
    </div>
  )
}
