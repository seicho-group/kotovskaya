import "./cart-item.css"
import pic from "src/shared/assets/фотобудетпозже.png"
import delete1 from "src/shared/assets/delete.svg"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { Product } from "src/shared/types/productDTO"
import { Link } from "react-router-dom"
import { Image } from "src/shared/ui/image/image"
import { IsMobileContext } from "src/app/app"
import { useContext } from "react"
import { Text } from "src/shared/ui/text/text"
import { ProductAccumulatorControls } from "src/entities/cart/ui/product-accumulator-controls"

type TProps = {
  product: Product
}

// todo: это сущность а не страница
export function CartItem({ product }: TProps) {
  const { cart, deleteProduct, incrementById, decrementById } = useCartStore()
  const isMobile = useContext(IsMobileContext)

  return (
    <div className="cartitem__area">
      <div className="center">
        <Link to={`/product/${product.id}`}>
          <Image imageLink={product.imageLink} />
        </Link>
      </div>
      <div className="cartitem__name">
        <Text>{product.name}</Text>
        <Text isBolder>
          {(cart[product.id].accumulator * product.price) / 100 + "₽"}
        </Text>
      </div>
      <ProductAccumulatorControls
        product={{ salePrice: product.price, oldPrice: 0, ...product }}
      />
      {isMobile ? null : (
        <div
          className="cartitem__delete__area"
          onClick={() => deleteProduct(product.id)}
          style={{ cursor: "pointer" }}
        >
          <img className="cartitem__delete" src={delete1} alt="" />
        </div>
      )}
    </div>
  )
}
