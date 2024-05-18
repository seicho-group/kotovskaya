import { Link } from "react-router-dom"
import "./category-panel.css"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"
import { TCategory } from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"

export function CategoryPanel(props: { category: TCategory }) {
  return (
    <Link to={`/categorypage/${props.category.id}`}>
      <div className="categorypanel">{props.category.name}</div>
    </Link>
  )
}
