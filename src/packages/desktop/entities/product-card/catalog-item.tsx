import "./catalog-item.css"
import { TCategory } from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"
import { Link } from "react-router-dom"

export function CatalogItem({
  id,
  category,
  subcategory,
}: {
  id: string
  category: string
  subcategory: TCategory[] | null
}) {
  return (
    <div className="catalog__item">
      <Link to={`/categorypage/${id}`}>
        <div className="catalog__item__h1">{category}</div>
      </Link>
      <div className="catalog__item__body">
        {subcategory?.map((sub: TCategory) => (
          <div className="catalog__item__body__item" key={sub.id}>
            <Link to={`/categorypage/${sub.id}`}>{sub.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
