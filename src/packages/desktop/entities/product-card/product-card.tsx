import "./product-card.css"
import { Link } from "react-router-dom"
import { API_URL } from "src/shared/api/config"
import pic from "src/shared/assets/фотобудетпозже.png"
import { useCartStore } from "src/entities/cart/model/cart-store"

export function ProductCard(props: any) {
  const { cart, incrementById, decrementById, setNewProduct, deleteProduct } =
    useCartStore()
  console.log(cart)

  return (
    <div className="card">
      <div>
        {props.id ? (
          <Link to={`/product/${props.id}`}>
            <img
              onError={(e) => {
                // @ts-ignore
                e.target.src = pic
              }}
              className="card__pic"
              src={`${API_URL}/images/${props.id}`}
              alt="alt"
            />
          </Link>
        ) : null}
      </div>
      <div className="card__name">
        <Link to={`/product/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </div>

      <div className="card__bottom">
        <p>{props.price / 100 + "₽"}</p>
        {props.quantity > 0 ? (
          cart[props.id]?.accumulator > 0 ? (
            <div className="card__quantity">
              <button
                className="card__quantity__button"
                onClick={() => {
                  if (cart[props.id].accumulator === 1) {
                    deleteProduct(props.id)
                  } else {
                    decrementById(props.id)
                  }
                }}
              >
                -
              </button>
              <div className="card__quantity__number">
                {cart[props.id]?.accumulator}
              </div>
              <button
                className="card__quantity__button"
                onClick={() => {
                  incrementById(props.id)
                }}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setNewProduct({
                  name: props.name,
                  price: props.price,
                  quantity: props.quantity || 0,
                  id: props.id,
                  image: props.image,
                  accumulator: 0,
                })
                incrementById(props.id)
              }}
            >
              В корзину
            </button>
          )
        ) : (
          <div className="card__button__notinstock">Нет в наличии</div>
        )}
      </div>
    </div>
  )
}
