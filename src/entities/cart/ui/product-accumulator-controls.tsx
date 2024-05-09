import { CSSProperties } from "react"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { Product, ProductDTO } from "src/shared/types/productDTO"
import mock from "src/shared/mock.png"

type Props = {
  product: ProductDTO
}

const buttonStyles: CSSProperties = {
  backgroundColor: "rgb(162, 162, 162)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "135px",
  height: "43px",
  color: "white",
  fontSize: "16px",
  borderRadius: "5px",
  outline: "none",
  border: "none",
  fontWeight: "500",
}

export const ProductAccumulatorControls = ({ product }: Props) => {
  const { setNewProduct, incrementById, decrementById, deleteProduct, cart } =
    useCartStore()

  const currentProductInCart = cart[product.id]

  if (product.quantity === 0) {
    return <div style={buttonStyles}>Нет в наличии</div>
  }

  if (currentProductInCart?.accumulator === 0 || !currentProductInCart) {
    return (
      <button
        onClick={() => {
          setNewProduct({
            accumulator: 1,
            id: product.id,
            quantity: product.quantity,
            image: mock,
            name: product.name,
            price: product.salePrices?.[0]?.value || 0,
          })
        }}
      >
        В корзину
      </button>
    )
  }
  return (
    <div className="card__quantity">
      <button
        className="card__quantity__button"
        onClick={() => {
          if (currentProductInCart?.accumulator === 1) {
            deleteProduct(currentProductInCart?.id)
          } else {
            decrementById(currentProductInCart?.id)
          }
        }}
      >
        -
      </button>
      <div className="card__quantity__number">
        {currentProductInCart?.accumulator}
      </div>
      <button
        className="card__quantity__button"
        onClick={() => {
          incrementById(currentProductInCart?.id)
        }}
      >
        +
      </button>
    </div>
  )
}
