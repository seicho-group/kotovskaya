import "./product-card.css"
import { Link } from "react-router-dom"
import { API_URL } from "src/shared/api/config"
import pic from "src/shared/assets/фотобудетпозже.png"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { ProductAccumulatorControls } from "src/entities/cart/ui/product-accumulator-controls"
import { ProductDTO } from "src/shared/types/productDTO"

type Props = {
  product: ProductDTO
}

// todo: пропсами принимать ProductDTO
export function ProductCard({ product }: Props) {
  return (
    <div className="card">
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
      <div className="card__name">
        <Link to={`/product/${product.id}`}>
          <p>{product.name}</p>
        </Link>
      </div>

      <div className="card__bottom">
        <p>{(product?.salePrices?.[0].value || 0) / 100 + "₽"}</p>
        <ProductAccumulatorControls product={product} />
      </div>
    </div>
  )
}
