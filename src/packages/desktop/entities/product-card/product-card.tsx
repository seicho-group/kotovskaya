import "./product-card.css"
import { Link } from "react-router-dom"
import { API_URL } from "src/shared/api/config"
import pic from "src/shared/assets/фотобудетпозже.png"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { ProductAccumulatorControls } from "src/entities/cart/ui/product-accumulator-controls"
import { ProductDTO } from "src/shared/types/productDTO"
import { useInView } from "react-intersection-observer"
import { IsMobileContext } from "src/app/app"
import { useContext } from "react"

type Props = {
  product: ProductDTO
}

// todo: пропсами принимать ProductDTO
export function ProductCard({ product }: Props) {
  const isOnSale = product?.salePrices?.[2].value != 0 ? true : false
  const { ref, inView } = useInView()

  const { isMobile } = useContext(IsMobileContext)
  return (
    <div
      className="card"
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "0.6s all ease-in-out",
      }}
    >
      <div>
        {product.id ? (
          <Link to={`/product/${product.id}`}>
            <img
              onError={(e) => {
                // @ts-ignore
                e.target.src = pic
              }}
              className="card__pic"
              src={`${API_URL}/images/${product.id}`}
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
              {(product?.salePrices?.[0].value || 0) / 100 + "₽"}
            </div>{" "}
            <div className={isMobile ? "oldprice__mobile" : "oldprice"}>
              {(product?.salePrices?.[2].value || 0) / 100 + "₽"}
            </div>
          </div>
        ) : (
          <p className={isMobile ? "card__price__mobile" : "card__price"}>
            {(product?.salePrices?.[0].value || 0) / 100 + "₽"}
          </p>
        )}

        <ProductAccumulatorControls product={product} />
      </div>
    </div>
  )
}
