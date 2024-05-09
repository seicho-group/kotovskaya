import "./cart-item.css"
import pic from "src/shared/assets/фотобудетпозже.png"
import delete1 from "src/shared/assets/delete.svg"
import { useCartStore } from "src/entities/cart/model/cart-store"

// todo: это сущность а не страница
export function CartItem(props: any) {
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
            src={props.photo}
            alt=""
          />
        </div>
        <div className="cartitem__name">
          <p>{props.name}</p>
          <div>{props.price}</div>
        </div>
        <div className="cartitem__quantity">
          <div className="cartitem__quantity__buttons">
            <button
              className="cartitem__quantity__button"
              onClick={() => {
                if (cart[props.id].accumulator === 1) {
                  deleteProduct(props.id)
                }
                decrementById(props.id)
              }}
            >
              -
            </button>
            <div className="cartitem__quantity">
              {cart[props.id]?.accumulator}
            </div>
            <button
              className="cartitem__quantity__button"
              onClick={() => {
                incrementById(props.id)
              }}
            >
              +
            </button>
          </div>
        </div>
        <div
          className="cartitem__delete__area"
          onClick={() => deleteProduct(props.id)}
          style={{ cursor: "pointer" }}
        >
          <img className="cartitem__delete" src={delete1} alt="" />
        </div>
      </div>
    </div>
  )
}
