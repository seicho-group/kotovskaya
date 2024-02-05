import './productCard.css'
import mock from './../../assets/mock.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { createLogger } from 'vite'
import { Link } from 'react-router-dom'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartStorage = Record<string, number>
// { "id": "count" }

type Product = {
  name: string
  price: number
  id: string
  image: string
  quantity: number
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
        if (state[id].quantity) {
          state[id].quantity += 1
        } else {
          state[id].quantity = 1
        }
        set({ cart: state })
      },
      decrementById: (id: string) => {
        const state = getState().cart
        if (state[id].quantity) {
          state[id].quantity -= 1
        } else {
          console.error('почему то убираем из корзины то чего в ней нет лол')
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

        console.log('state', newState)
        delete newState[product.id]
        set({ cart: newState })
      },
    }),
    { name: 'cart' }
  )
)

export function ProductCard(props: any) {
  // const { getQuantityById, setQuantityById } =
  const { cart, incrementById, decrementById, setNewProduct, deleteProduct } =
    useCartState()
  console.log(cart)

  return (
    <div className="card">
      <div>
        {props.id ? (
          <Link to={`/product/${props.id}`}>
            <img
              className="card__pic"
              src={`http://95.182.120.200:8080/images/${props.id}`}
              alt=""
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
        <p>{props.price / 100 + '₽'}</p>
        {cart[props.id]?.quantity > 0 ? (
          <div className="card__quantity">
            <button
              className="card__quantity__button"
              onClick={() => {
                console.log('state')
                if (cart[props.id].quantity === 1) {
                  deleteProduct({
                    name: props.name,
                    price: props.price,
                    quantity: 0,
                    id: props.id,
                    image: props.image,
                  })
                }
                decrementById(props.id)
              }}
            >
              -
            </button>
            <div className="card__quantity__number">
              {cart[props.id]?.quantity}
            </div>
            <button
              className="card__quantity__button"
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
          </div>
        ) : (
          <button
            onClick={() => {
              setNewProduct({
                name: props.name,
                price: props.price,
                quantity: 0,
                id: props.id,
                image: props.image,
              })
              incrementById(props.id)
            }}
          >
            В корзину
          </button>
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
