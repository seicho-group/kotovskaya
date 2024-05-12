import { useCartStore } from "src/entities/cart/model/cart-store"
import { ProductDTO } from "src/shared/types/productDTO"
import mock from "src/shared/mock.png"
import { Button } from "src/shared/ui/button/button"
import { CSSProperties } from "react"
import { IsMobileContext } from "src/app/app"
import { useContext } from "react"

type Props = {
  product: ProductDTO
}

const accumulatorCounterStylesMobile: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  fontSize: "20px",
  width: "33px",
}

const accumulatorCounterStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  fontSize: "20px",
  width: "50px",
}

export const ProductAccumulatorControls = ({ product }: Props) => {
  const { setNewProduct, incrementById, decrementById, deleteProduct, cart } =
    useCartStore()

  const currentProductInCart = cart[product.id]
  const { isMobile } = useContext(IsMobileContext)
  if (product.quantity === 0 || !product.quantity) {
    return (
      <Button width={IsMobileContext ? "99px" : "135px"} disabled>
        Нет в наличии
      </Button>
    )
  }

  if (currentProductInCart?.accumulator === 0 || !currentProductInCart) {
    return (
      <Button
        width={isMobile ? "99px" : "130px"}
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
    <div className={isMobile ? "card__quantity__mobile" : "card__quantity"}>
      <Button
        width={isMobile ? "33px" : "40px"}
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
        width={isMobile ? "33px" : "40px"}
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
