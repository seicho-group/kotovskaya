import "./search-product-mobile.css"
import { Link } from "react-router-dom"
import pic from "src/shared/assets/mockphoto.png"

export function SearchProductMobile(props: any) {
  return (
    <>
      <Link
        onClick={() => props.SetIsClicked(false)}
        to={`/product/${props.id}`}
      >
        <div className="search__product__mobile">
          <img
            onError={(e) => {
              // @ts-ignore
              e.target.src = pic
            }}
            src={`https://storage.yandexcloud.net/kotovskaya.products/${props.imageLink}`}
            alt=""
            style={{ width: "60px", height: "60px" }}
          />
          <div>{props.name}</div>
        </div>
      </Link>
    </>
  )
}
