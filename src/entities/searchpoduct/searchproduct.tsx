import './searchproduct.css'
import pic from "./../../assets/searchpic.png"
export function SearchProduct(props) {
    return(
        <div className="search__product">
            <img src={pic} alt="" />
            <div>{props.name}</div>
        </div>
    )
}