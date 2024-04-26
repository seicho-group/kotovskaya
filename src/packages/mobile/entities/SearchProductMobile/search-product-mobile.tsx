import "./SearchProductMobile.css";
import { Link } from "react-router-dom";
import pic from "src/shared/assets/searchpic.png";
export function SearchProductMobile(props: any) {
  return (
    <>
      <Link
        onClick={() => props.SetIsClicked(false)}
        to={`/product/${props.id}`}
      >
        <div className="search__product__mobile">
          <img src={pic} alt="" />
          <div>{props.name}</div>
        </div>
      </Link>
    </>
  );
}
