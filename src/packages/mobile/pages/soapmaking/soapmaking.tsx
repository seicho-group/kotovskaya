import "./soapmaking.css"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { API_URL_CATEGORIES } from "src/shared/api/config"
import { CategoryPanel } from "src/widgets/category-panel/category-panel"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductsList } from "src/widgets/products-list/ui/products-list"
import { useQuery } from "@tanstack/react-query"
import { TCategoryInfo } from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"

export type Category = {
  name: string
  id: string
  categoryChildren: Category[]
  categoryItems: ProductDTO[]
}

export type CategoryDTO = {
  name: string
  id: string
}

export type GetCategoryItemsResponse = {
  categoryId: string
  categoryName: string
  categoryItems: ProductDTO[]
  categoryChildren: CategoryDTO[]
}

export type GetCategoryRequest = {
  categoryId: string
}
const useCategories = () => {
  return useQuery<TCategoryInfo[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get<TCategoryInfo[]>(
        `${API_URL_CATEGORIES}/get_all_categories_tree`,
      )
      return response.data
    },
    staleTime: 1000 * 60 * 60,
  })
}
export function Soapmaking() {
  const { data: allCategories = [], isPending } = useCategories()
  const [products, setProducts] = useState<ProductDTO[]>([])
  const [soapmakingSoapBases, setSoapmakingSoapBases] = useState<ProductDTO[]>(
    [],
  )
  const [colors, setColors] = useState<ProductDTO[]>([])
  const soapmakingM = [
    "Базовые масла",
    "Инструменты и приспособления",
    "Мыльная основа",
    "Щелочь",
    "Формы",
    "Красители",
    "Отдушки",
    "Упаковка",
    "Тара",
    "Эфирные масла",
    "Штампы для мыла",
    "ПАВы",
    "Водорастворимая бумага",
    "Люфа, скрабы,",
  ]

  useEffect(() => {
    axios
      .post<GetCategoryRequest, AxiosResponse<GetCategoryItemsResponse>>(
        `${API_URL_CATEGORIES}/get_category_items`,
        {
          categoryId: "19be723c-cd2b-4c6d-8947-d07f5c5cc7da",
        },
      )
      .then((res) => {
        setSoapmakingSoapBases(res.data.categoryItems)
      })
  }, [])

  return (
    <div>
      <div className="mobile__wrapper">
        <p className="category__name">Мыловарение</p>
        <div className="fff">
          {allCategories
            .filter((key) => soapmakingM.includes(key.name))
            .map((category) => (
              <CategoryPanel category={category} />
            ))}
        </div>
        <ProductsList
          productsArray={[...products, ...colors, ...soapmakingSoapBases]}
        />
      </div>
    </div>
  )
}
