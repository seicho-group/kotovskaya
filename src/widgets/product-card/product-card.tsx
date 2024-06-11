import "./product-card.css"
import { Link } from "react-router-dom"
import pic from "src/shared/assets/фотобудетпозже.png"
import { ProductAccumulatorControls } from "src/entities/cart/ui/product-accumulator-controls"
import { ProductDTO } from "src/shared/types/productDTO"
import { IsMobileContext } from "src/app/app"
import { useContext } from "react"

type Props = {
  product: ProductDTO
}

export function ProductCard({ product }: Props) {
  const isOnSale = product?.oldPrice != null

  const { isMobile } = useContext(IsMobileContext)
  return (
    <div
      className="card"
      style={{
        transition: "0.6s all ease-in-out",
      }}
    >
      <div>
        {product.id ? (
          <Link to={`/product/${product.id}`}>
            <img
              onError={(e) => {
                e.preventDefault()
                // @ts-ignore
                e.target.src = pic
              }}
              className="card__pic"
              src={`https://storage.yandexcloud.net/kotovskaya.products/${product.imageLink}`}
              alt="alt"
            />
          </Link>
        ) : null}
      </div>
      <div className={isMobile ? "card__name__mobile" : "card__name"}>
        <Link to={`/product/${product.id}`}>
          <p>{product.name}</p>
        </Link>
      </div>

      <div className="card__bottom">
        {isOnSale ? (
          <div
            className={
              isMobile ? "saleprice__bottom__mobile" : "saleprice__bottom"
            }
          >
            <div className={isMobile ? "newprice__mobile" : "newprice"}>
              {(product?.salePrice || 0) / 100 + "₽"}
            </div>{" "}
            <div className={isMobile ? "oldprice__mobile" : "oldprice"}>
              {(product?.oldPrice || 0) / 100 + "₽"}
            </div>
          </div>
        ) : (
          <p className={isMobile ? "card__price__mobile" : "card__price"}>
            {(product?.salePrice || 0) / 100 + "₽"}
          </p>
        )}

        <ProductAccumulatorControls product={product} />
      </div>
    </div>
  )
}
