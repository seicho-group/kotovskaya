import './searchproduct.css'
import { Link } from 'react-router-dom'
import pic from "./../../assets/фотобудетпозже.png"

export function SearchProduct(props: any) {
    return(
        <>
        <Link onClick={()=>(props.SetIsClicked(false))} to={`/product/${props.id}`}>
        <div className="search__product">
            <img className='search__product__pic' onError={(e) => {
                // @ts-ignore
                    e.target.src = pic;
                }} src={pic} alt="" />
            <div>{props.name}</div>
        </div>
        </Link>
        </>
    )
}