import "./product-card-mobile.css"
import { Link } from "react-router-dom"
import { API_URL } from "src/shared/api/config"
import pic from "../../../shared/assets/фотобудетпозже.png"
import { useCartStore } from "src/entities/cart/model/cart-store"

export function ProductCardMobile(props: any) {
  const { cart, incrementById, decrementById, setNewProduct, deleteProduct } =
    useCartStore()

  return (
    <div className="card__mobile">
      <div>
        {props.id ? (
          <Link to={`/product/${props.id}`}>
            <img
              onError={(e) => {
                // @ts-ignore
                e.target.src = pic
              }}
              className="card__pic__mobile"
              src={`${API_URL}/images/${props.id}`}
              alt=""
            />
          </Link>
        ) : null}
      </div>
      <div className="card__name__mobile">
        <Link to={`/product/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </div>
      <div className="card__bottom__mobile">
        <p>{props.price / 100 + "₽"}</p>
        {props.quantity > 0 ? (
          (cart[props.id]?.accumulator || 0) > 0 ? (
            <div className="card__quantity__mobile">
              <button
                className="card__quantity__button__mobile"
                onClick={() => {
                  console.log("state")
                  if (cart[props.id].accumulator === 1) {
                    deleteProduct({
                      name: props.name,
                      price: props.price,
                      accumulator: 0,
                      id: props.id,
                      image: props.image,
                      quantity: props.quantity,
                    })
                  }
                  decrementById(props.id)
                }}
              >
                -
              </button>
              <div className="card__quantity__number__mobile">
                {cart[props.id]?.accumulator}
              </div>
              {(cart[props.id]?.accumulator || 0) < cart[props.id]?.quantity ? (
                <button
                  className="card__quantity__button__mobile"
                  onClick={() => {
                    incrementById(props.id)
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
                  name: props.name,
                  price: props.price,
                  accumulator: 0,
                  id: props.id,
                  image: props.image,
                  quantity: props.quantity,
                })
                incrementById(props.id)
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
        {/*<p>{cart[props.id]}</p>*/}

        {/*{currentCart || 0 > 0 ? (*/}
        {/*  <div className="card__quantity">*/}
        {/*    <button*/}
        {/*
        {/*      }}*/}
        {/*    >*/}
        {/*      -*/}
        {/*    </button>*/}
        {/*    {currentCart[props.id]}*/}
        {/*    /!*<div className="card__quantity__number">{currentQuantity}</div>*!/*/}
        {/*
        {/*        });*/}
        {/*        localStorage.setItem(*/}
        {/*          "cart",*/}
        {/*          localStorage.getItem("cart") || "{}"*/}
        {/*        );*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      +*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  <button*/}
        {/*  // onClick={() => {*/}
        {/*  //   localStorage.setItem(props.id, "1");*/}
        {/*  //   setCurrentCart();*/}
        {/*  // }}*/}
        {/*  >*/}
        {/*    В корзину*/}
        {/*  </button>*/}
        {/*)}*/}
      </div>
    </div>
  )
}
