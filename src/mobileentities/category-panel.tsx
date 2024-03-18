import "./categorypanel.css"
export function CategoryPanel(props: any) {
    return(
        <div className="categorypanel">{props.category}</div>
    )
}