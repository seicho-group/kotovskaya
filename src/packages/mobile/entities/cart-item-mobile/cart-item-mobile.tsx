import "./cart-item-mobile.css"
import pic from "src/shared/assets/фотобудетпозже.png"
import { useCartStore } from "src/entities/cart/model/cart-store"

export function CartItemMobile(props: any) {
  const { cart, deleteProduct, incrementById, decrementById } = useCartStore()
  return (
    <div>
      <div className="cartitem__area__mobile">
        <div className="center">
          <img
            onError={(e) => {
              // @ts-ignore
              e.target.src = pic
            }}
            className="cartitem__area__photo__mobile"
            src={props.photo}
            alt=""
          />
        </div>
        <div className="cartitem__name__mobile">
          <p>{props.name}</p>
          <div>{props.price}</div>
        </div>
        <div className="cartitem__quantity__mobile">
          <div className="cartitem__quantity__buttons__mobile">
            <button
              className="cartitem__quantity__button__mobile"
              onClick={() => {
                console.log("state")
                if (cart[props.id].accumulator === 1) {
                  deleteProduct(props.id)
                }
                decrementById(props.id)
              }}
            >
              -
            </button>
            <div className="cartitem__quantity__mobile">
              {cart[props.id]?.accumulator}
            </div>
            {cart[props.id]?.accumulator < props.quantity ? (
              <button
                className="cartitem__quantity__button__mobile"
                onClick={() => {
                  // setNewProduct({
                  //   name: props.name,
                  //   quantity: 0,
                  //   id: props.id,
                  //   image: `http://95.182.121.35:8080/images/${props.id}`,
                  //   price: props.price / 100,
                  // });
                  incrementById(props.id)
                }}
              >
                +
              </button>
            ) : (
              <div className="cartitem__quantity__button__mobile__disabled">
                +
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
