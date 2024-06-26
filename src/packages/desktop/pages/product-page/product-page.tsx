import "./product-page.css"
import { useEffect, useState } from "react"
import { requestProduct } from "src/shared/api/single-product/request"
import { useParams } from "react-router-dom"
import { ProductDTO } from "src/shared/types/productDTO"
import { ProductAccumulatorControls } from "src/entities/cart/ui/product-accumulator-controls"
import { Image } from "src/shared/ui/image/image"
import { Helmet } from "react-helmet"
import { Loader } from "src/widgets/loader/loader"

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [productInfo, setProductInfo] = useState<ProductDTO | null>(null)
  const isOnSale = productInfo?.oldPrice != null ? true : false
  useEffect(() => {
    if (id) {
      requestProduct(id).then(setProductInfo)
    } else {
      console.error(
        "Страница ProductPage была использована без айди продукта в url",
      )
    }
  }, [id])

  if (!productInfo) {
    return <Loader />
  }

  return (
    <div className="productpage">
      <Helmet title={productInfo?.name ?? "Страница продукта"} />
      <div className="productpage__wrapper">
        <Image imageLink={productInfo?.imageLink} width={"400px"} />
        <div className="productpage__rightinfo">
          <h1 className="productpage__name">{productInfo?.name}</h1>
          <div className="productpage__description">
            {productInfo?.description}
          </div>
          <div className="productpage__bottom">
            <div>
              {isOnSale ? (
                <div className="saleprice__bottom">
                  <div className="newprice">
                    {(productInfo?.salePrice || 0) / 100 + "₽"}
                  </div>{" "}
                  <div className="oldprice">
                    {(productInfo?.oldPrice || 0) / 100 + "₽"}
                  </div>
                </div>
              ) : (
                <div className="productpage__bottom__price">
                  {(productInfo?.salePrice || 0) / 100 + "₽"}
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
