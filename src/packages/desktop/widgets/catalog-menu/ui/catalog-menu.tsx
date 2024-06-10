import "./catalog-menu.css"
import { CatalogItem } from "../../../entities/product-card/catalog-item"
import axios from "axios"
import { API_URL_CATEGORIES } from "src/shared/api/config"
import { useQuery } from "@tanstack/react-query"

export type TCategory = {
  id: string
  name: string
  categoryItems: TCategory[] | null
}
export const soapmaking = [
  "Эфирные масла",
  "Базовые масла",
  "Инcтрументы и приспособления",
  "Мыльная основа",
  "Щелочь",
  "Формы",
]
export const soapmaking2 = [
  "Красители",
  "Отдушки",
  "Инструменты и приспособления",
  "Люфа, скрабы, сухоцветы",
]
export const soapmaking3 = [
  "Упаковка",
  "Тара",
  "Водорастворимая бумага",
  "ПАВы",
  "Штампы для мыла",
]

export const candlesMaking = ["Все для свечей"]
export const cosmeticsMaking = ["Компоненты для косметики", "Бисер для ванн"]

export const useCategories = () => {
  return useQuery<TCategory[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get<TCategory[]>(
        `${API_URL_CATEGORIES}/get_all_categories_tree`,
      )
      return response.data
    },
    staleTime: 1000 * 60 * 60,
  })
}

const mapCategoriesToUI = (
  categories: TCategory[],
  filterStrings: string[],
  setIsShown: (isOShown: boolean) => void,
) => {
  return categories
    .filter((product) => filterStrings.includes(product.name))
    .map((product) => (
      <CatalogItem
        id={product.id}
        key={product.id}
        category={product.name}
        subcategory={product.categoryItems}
        setIsShown={setIsShown}
      />
    ))
}

export function CatalogMenu(props: any) {
  const { data: categories = [], isPending } = useCategories()
  const setIsShown = props.setIsShown
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
        {mapCategoriesToUI(categories, soapmaking, setIsShown)}
      </div>
      <div className="catalog__row__noh1">
        {mapCategoriesToUI(categories, soapmaking2, setIsShown)}
      </div>
      <div className="catalog__row__noh1">
        {mapCategoriesToUI(categories, soapmaking3, setIsShown)}
      </div>
      <div>
        <div style={{ marginBottom: "50px" }} className="catalog__row">
          <p className="catalog__h1">Cвечеварение</p>
          {mapCategoriesToUI(categories, candlesMaking, setIsShown)}
        </div>
        <div className="catalog__row">
          <p className="catalog__h1">Косметика ручной работы</p>
          {mapCategoriesToUI(categories, cosmeticsMaking, setIsShown)}
        </div>
      </div>
    </div>
  )
}
