import './searchproductmobile.css'
import pic from "./../../assets/searchpic.png"
export function SearchProductMobile(props) {
    return(
        <div className="search__product__mobile">
            <img src={pic} alt="" />
            <div>{props.name}</div>
        </div>
    )
}