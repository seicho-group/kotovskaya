import "./cart-item.css"
import pic from "src/shared/assets/фотобудетпозже.png"
import delete1 from "src/shared/assets/delete.svg"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { Product } from "src/shared/types/productDTO"
import { getImageUrl } from "src/shared/api/get-image-url"

type Props = {
  product: Product
}

// todo: это сущность а не страница
export function CartItem({ product }: Props) {
  const { cart, deleteProduct, incrementById, decrementById } = useCartStore()
  return (
    <div>
      <div className="cartitem__area">
        <div className="center">
          <img
            onError={(e) => {
              // @ts-ignore
              e.target.src = pic
            }}
            className="cartitem__area__photo"
            src={getImageUrl(product.id)}
            alt=""
          />
        </div>
        <div className="cartitem__name">
          <p>{product.name}</p>
          <div>{product.price / 100 + "₽"}</div>
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
        <div
          className="cartitem__delete__area"
          onClick={() => deleteProduct(product.id)}
          style={{ cursor: "pointer" }}
        >
          <img className="cartitem__delete" src={delete1} alt="" />
        </div>
      </div>
    </div>
  )
}
