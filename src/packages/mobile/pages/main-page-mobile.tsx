import { Link } from "react-router-dom"
import LONG_ARROW_ICON from "src/shared/assets/longaarow.svg"
import SHORT_ARROW_ICON from "src/shared/assets/shortarrow.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { ProductsList } from "src/packages/desktop/widgets/products-list/ui/products-list"
import { ProductDTO } from "src/shared/types/productDTO"
import { Slider } from "src/shared/ui/slider/ui/slider"

export function MainPageMobile() {
  const [popularArrayM, setPopularArrayM] = useState<ProductDTO[]>([])
  const [newArrayM, setNewArrayM] = useState<ProductDTO[]>([])

  useEffect(() => {
    axios
      .get(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        setPopularArrayM(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(`${API_URL}/products/new`, {
        withCredentials: true,
      })
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
          <Link to={"/candlemaking"}>
            <div className="categoryblock2 candle">
              <p>Свечеварение</p>
              <div className="arrowblock">
                <img src={SHORT_ARROW_ICON} alt="" />
              </div>
            </div>
          </Link>
          <Link to={"/cosmetics"}>
            <div className="categoryblock2 cosmetics">
              <p>Компоненты для косметики</p>
              <div className="arrowblock">
                <img src={SHORT_ARROW_ICON} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <ProductsList
          productsArray={popularArrayM}
          categoryName={"Популярное"}
        />
      </div>
      <div>
        <ProductsList
          productsArray={newArrayM}
          categoryName={"Новинки"}
          linkTo={"/new"}
        />
      </div>
    </div>
  )
}
