import "./product-page.css"
import { useEffect, useState } from "react"
import { requestProduct } from "src/shared/api/single-product/request"
import { useParams } from "react-router-dom"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductAccumulatorControls } from "src/entities/cart/ui/product-accumulator-controls"
import { Image } from "src/shared/get-image/get-image"

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [productInfo, setProductInfo] = useState<ProductDTO | null>(null)
  const isOnSale = productInfo?.salePrices?.[2].value != 0 ? true : false
  useEffect(() => {
    if (id) {
      requestProduct(id).then(setProductInfo)
    } else {
      console.error(
        "Страница ProductPage была использована без айди продукта в url",
      )
    }
  }, [id])

  return (
    <div className="productpage">
      <div className="productpage__wrapper">
        <Image id={productInfo?.id} />
        <div className="productpage__rightinfo">
          <div className="productpage__name">{productInfo?.name}</div>
          <div className="productpage__description">
            {productInfo?.description}
          </div>
          <div className="productpage__bottom">
            <div>
              {isOnSale ? (
                <div className="saleprice__bottom">
                  <div className="newprice">
                    {(productInfo?.salePrices?.[0].value || 0) / 100 + "₽"}
                  </div>{" "}
                  <div className="oldprice">
                    {(productInfo?.salePrices?.[2].value || 0) / 100 + "₽"}
                  </div>
                </div>
              ) : (
                <div className="productpage__bottom__price">
                  {(productInfo?.salePrices?.[0].value || 0) / 100 + "₽"}
                </div>
              )}
            </div>
            {productInfo && (
              <ProductAccumulatorControls product={productInfo} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
