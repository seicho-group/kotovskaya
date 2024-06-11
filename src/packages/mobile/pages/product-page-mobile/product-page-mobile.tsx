import "./product-page-mobile.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { requestProduct } from "src/shared/api/single-product/request"
import { ProductAccumulatorControls } from "src/entities/cart/ui/product-accumulator-controls"
import { ProductDTO } from "src/shared/types/productDTO"
import { Loader } from "src/widgets/loader/loader"
import pic from "src/shared/assets/mockphoto.png"
import { Image } from "src/shared/ui/image/image"

export function ProductPageMobile() {
  const { id } = useParams<{ id: string }>()
  const [productInfo, setProductInfo] = useState<ProductDTO | null>(null)

  useEffect(() => {
    if (id) {
      requestProduct(id).then((product) => setProductInfo(product))
    } else {
      console.error(
        "Страница ProductPage была использована без айди продукта в url",
      )
    }
  }, [id])
  const isOnSale = productInfo?.oldPrice != null ? true : false
  if (!productInfo) {
    return <Loader />
  }
  return (
    <div className="productpage__mobile">
      <div className="productpage__wrapper__mobile">
        <div className="image__productpage">
          <Image imageLink={productInfo?.imageLink} />
        </div>

        <h1 className="productpage__name__mobile">{productInfo?.name}</h1>
        <div className="productpage__price">
          {isOnSale ? (
            <div>
              <div className="oldprice__mobile">
                {(productInfo?.oldPrice || 0) / 100 + "₽"}
              </div>
              <div className="newprice__mobile">
                {(productInfo?.salePrice || 0) / 100 + "₽"}
              </div>{" "}
            </div>
          ) : (
            <p>{(productInfo?.salePrice || 0) / 100 + "₽"}</p>
          )}
        </div>
        <div className="productpage__description__mobile">
          {productInfo?.description}
        </div>
        <div
          style={{
            marginRight: "20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ProductAccumulatorControls product={productInfo} />
        </div>
      </div>
    </div>
  )
}
