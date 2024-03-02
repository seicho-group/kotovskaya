import "./mainpage.css"
import arrow from "./../assets/Arrow 4.svg"
import { Link } from 'react-router-dom'
import longarrow from "./../assets/longaarow.svg"
import shortarrow from "./../assets/shortarrow.svg"
export function MainPage(){
    return(
        <div className="mainpage">
            <div className="categrptyblocks__wrapper">
                <Link to={'/soapmaking'}>
                <div className="categoryblock soap">
                    <p>Мыловарение</p>
                    <div className="arrowblock"><img src={longarrow} alt="" /></div>
                </div>
                </Link>
                <div className="bottomblock">
                    <Link to={'/candlemaking'}>
                    <div className="categoryblock2 candle">
                        <p>Свечеварение</p>
                    <div className="arrowblock"><img src={shortarrow} alt="" /></div></div>
                    </Link>
                    <Link to={'/cosmetics'}>
                    <div className="categoryblock2 cosmetics">
                        <p>Компоненты для косметики</p>
                    <div className="arrowblock"><img src={shortarrow} alt="" /></div></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}