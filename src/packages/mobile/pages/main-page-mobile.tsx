import { Link } from "react-router-dom"
import LONG_ARROW_ICON from "src/shared/assets/longaarow.svg"
import SHORT_ARROW_ICON from "src/shared/assets/shortarrow.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL_CATEGORIES, API_URL_PRODUCTS } from "src/shared/api/config"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { ProductDTO } from "src/shared/types/productDTO"
import { Slider } from "src/shared/ui/slider/ui/slider"
import "./main-page-mobile.css"
import { useQuery } from "@tanstack/react-query"
import { TCategory } from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"

export function MainPageMobile() {
  const [popularArrayM, setPopularArrayM] = useState<ProductDTO[]>([])
  const [newArrayM, setNewArrayM] = useState<ProductDTO[]>([])

  useEffect(() => {
    axios
      .post(`${API_URL_PRODUCTS}/get_popular_products`, undefined)
      .then((response) => {
        setPopularArrayM(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .post(`${API_URL_PRODUCTS}/get_new_products`, undefined)
      .then((response) => {
        setNewArrayM(response.data)
      })
  }, [])

  return (
    <div className="mainpage">
      <Slider />
      <div className="categrptyblocks__wrapper">
        <Link to={"/soapmaking"}>
          <div className="categoryblock soap">
            <p>Мыловарение</p>
            <div className="arrowblock">
              <img src={LONG_ARROW_ICON} alt="" />
            </div>
          </div>
        </Link>
        <div className="bottomblock">
          <Link to={"/categorypage/5986b77d-7eae-4889-b290-65a0e9bb5115"}>
            <div className="categoryblock2 candle">
              <p>Свечеварение</p>
              <div className="arrowblock">
                <img src={SHORT_ARROW_ICON} alt="" />
              </div>
            </div>
          </Link>
          <Link to={"/categorypage/fc2bfc1b-a68f-42c6-bf36-413860296137"}>
            <div className="categoryblock2 cosmetics">
              <p>Компоненты для косметики</p>
              <div className="arrowblock">
                <img src={SHORT_ARROW_ICON} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mobile__wrapper">
        <ProductsList
          productsArray={popularArrayM}
          categoryName={"Популярное"}
        />
      </div>
      <div className="mobile__wrapper">
        <ProductsList
          productsArray={newArrayM}
          categoryName={"Новинки"}
          linkTo={"/new"}
        />
      </div>
    </div>
  )
}
