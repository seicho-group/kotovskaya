import "./product-page-mobile.css"
import { useEffect, useState } from "react"
import mock from "src/shared/assets/mock2.jpg"
import { useParams } from "react-router-dom"
import { requestProduct } from "src/shared/api/single-product/request"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { Image } from "src/shared/get-image/get-image"
import { ProductAccumulatorControls } from "src/entities/cart/ui/product-accumulator-controls"
import { Product, ProductDTO } from "src/shared/types/productDTO"
import { IsMobileContext } from "src/app/app"
import { useContext } from "react"

export function ProductPageMobile(props: any) {
  const { isMobile } = useContext(IsMobileContext)

  const { cart, deleteProduct, incrementById, decrementById, setNewProduct } =
    useCartStore()
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
    return null
  }
  return (
    <div className="productpage__mobile">
      <div className="productpage__wrapper__mobile">
        <div className="image__productpage">
          <Image id={productInfo?.id} />
        </div>

        <div className="productpage__name__mobile">{productInfo?.name}</div>
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
        {/* <div className="productpage__bottom__mobile">
          <div className="productpage__bottom__button__mobile">
            {productInfo?.quantity > 0 ? (
              (cart[productInfo?.id]?.accumulator || 0) > 0 ? (
                <div className="card__quantity__mobile">
                  <button
                    className="card__quantity__button__mobile"
                    onClick={() => {
                      if (cart[props.id].accumulator === 1) {
                        deleteProduct(productInfo?.id)
                      }
                      decrementById(productInfo?.id)
                    }}
                  >
                    -
                  </button>
                  <div className="card__quantity__number">
                    {cart[productInfo?.id]?.accumulator}
                  </div>
                  {(cart[productInfo?.id]?.accumulator || 0) <
                  cart[productInfo?.id]?.quantity ? (
                    <button
                      className="card__quantity__button__mobile"
                      onClick={() => {
                        incrementById(productInfo?.id)
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <div className="card__quantity__button__mobile__disabled">
                      +
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setNewProduct({
                      name: productInfo?.name,
                      price: productInfo?.price,
                      accumulator: 1,
                      id: productInfo?.id,
                      image: productInfo?.image,
                      quantity: productInfo?.quantity,
                    })
                    incrementById(productInfo?.id)
                  }}
                >
                  В корзину
                </button>
              )
            ) : (
              <div className="card__button__notinstock__mobile">
                <div className="notinstock">Нет в наличии</div>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </div>
  )
}
