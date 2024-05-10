import { Link } from "react-router-dom"
import "./category-panel.css"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"

export function CategoryPanel(props: { category: Category }) {
  return (
    <Link to={`/categorypage/${props.category.category_id}`}>
      <div className="categorypanel">{props.category.category_name}</div>
    </Link>
  )
}
