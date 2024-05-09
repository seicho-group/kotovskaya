import "./product-card-mobile.css"
import mock from "./../../assets/mock.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { createLogger } from "vite"
import { Link } from "react-router-dom"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { API_URL } from "../../../shared/api/config"
import pic from "../../../shared/assets/фотобудетпозже.png"

type CartStorage = Record<string, number>
// { "id": "count" }

type Product = {
  name: string
  price: number
  id: string
  image: string
  quantity: number
  accumulator: number
}

type CartState = {
  cart: Record<string, Product>
  incrementById: (id: string) => void
  decrementById: (id: string) => void
  deleteProduct: (product: Product) => void
  setNewProduct: (product: Product) => void
}

export const useCartState = create(
  persist<CartState>(
    (set, getState) => ({
      cart: {},
      incrementById: (id: string) => {
        const state = getState().cart
        if (state[id].accumulator) {
          state[id].accumulator += 1
        } else {
          state[id].accumulator = 1
        }
        set({ cart: state })
      },
      decrementById: (id: string) => {
        const state = getState().cart
        if (state[id].accumulator) {
          state[id].accumulator -= 1
        } else {
          console.error("почему то убираем из корзины то чего в ней нет лол")
        }
        set({ cart: state })
      },
      setNewProduct: (product: Product) => {
        const newState = getState().cart
        if (newState[product.id]) {
          return
        }
        newState[product.id] = product
        set({ cart: newState })
      },
      deleteProduct: (product: Product) => {
        const newState = getState().cart

        console.log("state", newState)
        delete newState[product.id]
        set({ cart: newState })
      },
    }),
    { name: "cart" },
  ),
)

// const d = deleteProduct({
//   id: "ff421f04-e437-11ed-0a80-04f30012dea2",

// })
// cart["ff421f04-e437-11ed-0a80-04f30012dea2"].accumulator = 0

export function ProductCardMobile(props: any) {
  console.log(props)
  // const { getQuantityById, setQuantityById } =
  const { cart, incrementById, decrementById, setNewProduct, deleteProduct } =
    useCartState()

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
          cart[props.id]?.accumulator > 0 ? (
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
              {cart[props.id]?.accumulator < cart[props.id]?.quantity ? (
                <button
                  className="card__quantity__button__mobile"
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
