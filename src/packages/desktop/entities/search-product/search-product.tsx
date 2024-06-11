import "./search-product.css"
import { Link } from "react-router-dom"
import pic from "src/shared/assets/фотобудетпозже.png"
import { Image } from "src/shared/ui/image/image"

export function SearchProduct(props: any) {
  return (
    <>
      <Link
        onClick={() => props.SetIsClicked(false)}
        to={`/product/${props.id}`}
      >
        <div className="search__product">
          <Image imageLink={props.imageLink} width="40px" />
          <div>{props.name}</div>
        </div>
      </Link>
    </>
  )
}
