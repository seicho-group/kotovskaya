import "./catalogItem.css"
export function CatalogItem(props) {
    return(
        <div className="catalog__item">
            <div className="catalog__item__h1">{props.category}</div>
            <div className="catalog__item__body">{props.subcategory}</div>
        </div>
    )
}