import "./search-product-card.css"
import { Link } from "react-router-dom"
import { Image } from "src/shared/ui/image/image"

export function SearchProductCard(props: any) {
  return (
    <Link onClick={() => props.SetIsClicked(false)} to={`/product/${props.id}`}>
      <div className="search__product">
        <Image imageLink={props.imageLink} width="40px" />
        <div>{props.name}</div>
      </div>
    </Link>
  )
}
