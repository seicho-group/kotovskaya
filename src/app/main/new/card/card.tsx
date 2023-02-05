import "./card.css"
import card1 from "./../../../../assets/card_1.jpeg"



export function Card(props: {name: string, price: string}) {
    return(
        <div className="card_area">
            <div className="d5">
            <img className="card_photo" src={card1} alt=""/>
            </div>
            <div className="d6">
            <h4>{props.name}</h4>
            </div>
            <div className="d6">
            <p>{props.price}</p>
            </div>
            <div className="d5">
            <button className="card_button card_button1">

            </button>
            <button className="card_button">В корзину</button>
            </div>
        </div>
    )
}