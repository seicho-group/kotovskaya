import { useCartStore } from "src/entities/cart/model/cart-store"
import { ProductDTO } from "src/shared/types/productDTO"
import mock from "src/shared/mock.png"
import { Button } from "src/shared/ui/button/button"
import { CSSProperties } from "react"

type Props = {
  product: ProductDTO
}

const accumulatorCounterStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "43px",
  fontSize: "20px",
}

export const ProductAccumulatorControls = ({ product }: Props) => {
  const { setNewProduct, incrementById, decrementById, deleteProduct, cart } =
    useCartStore()

  const currentProductInCart = cart[product.id]

  if (product.quantity === 0 || !product.quantity) {
    return <Button disabled>Нет в наличии</Button>
  }

  if (currentProductInCart?.accumulator === 0 || !currentProductInCart) {
    return (
      <Button
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
      </Button>
    )
  }
  return (
    <div className="card__quantity">
      <Button
        width={"40px"}
        onClick={() => {
          if (currentProductInCart?.accumulator === 1) {
            deleteProduct(currentProductInCart?.id)
          } else {
            decrementById(currentProductInCart?.id)
          }
        }}
      >
        -
      </Button>
      <div style={accumulatorCounterStyles}>
        {currentProductInCart?.accumulator}
      </div>
      <Button
        width={"40px"}
        onClick={() => {
          incrementById(currentProductInCart?.id)
        }}
        disabled={currentProductInCart?.accumulator === product.quantity}
      >
        +
      </Button>
    </div>
  )
}
