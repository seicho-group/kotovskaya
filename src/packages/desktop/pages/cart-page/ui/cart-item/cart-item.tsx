import "./cart-item.css"
import pic from "src/shared/assets/фотобудетпозже.png"
import delete1 from "src/shared/assets/delete.svg"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { Product } from "src/shared/types/productDTO"
import { Link } from "react-router-dom"
import { Image } from "src/shared/ui/image/image"
import { IsMobileContext } from "src/app/app"
import { useContext } from "react"
import { Text } from "src/shared/ui/text/text"

type TProps = {
  product: Product
}

// todo: это сущность а не страница
export function CartItem({ product }: TProps) {
  const { cart, deleteProduct, incrementById, decrementById } = useCartStore()
  const isMobile = useContext(IsMobileContext)

  return (
    <div className="cartitem__area">
      <div className="center">
        <Link to={`/product/${product.id}`}>
          <Image imageLink={product.imageLink} />
        </Link>
      </div>
      <div className="cartitem__name">
        <Text>{product.name}</Text>
        <Text isBolder>{product.price / 100 + "₽"}</Text>
      </div>
      <div className="cartitem__quantity">
        <div className="cartitem__quantity__buttons">
          <button
            className="cartitem__quantity__button"
            onClick={() => {
              if (cart[product.id].accumulator === 1) {
                deleteProduct(product.id)
              }
              decrementById(product.id)
            }}
          >
            -
          </button>
          <div className="cartitem__quantity">
            {cart[product.id]?.accumulator}
          </div>
          <button
            className="cartitem__quantity__button"
            onClick={() => {
              incrementById(product.id)
            }}
          >
            +
          </button>
        </div>
      </div>
      {isMobile ? null : (
        <div
          className="cartitem__delete__area"
          onClick={() => deleteProduct(product.id)}
          style={{ cursor: "pointer" }}
        >
          <img className="cartitem__delete" src={delete1} alt="" />
        </div>
      )}
    </div>
  )
}
