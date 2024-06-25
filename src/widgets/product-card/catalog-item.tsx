import "./catalog-item.css"
import { TCategoryInfo } from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"
import { Link } from "react-router-dom"

export function CatalogItem({
  id,
  category,
  subcategory,
  setIsShown,
}: {
  id: string
  category: string
  subcategory: TCategoryInfo[] | null
  setIsShown: (isShown: boolean) => void
}) {
  return (
    <ul className="catalog__item">
      <Link onClick={() => setIsShown(false)} to={`/category/${id}`}>
        <li className="catalog__item__h1">{category}</li>
      </Link>
      <div className="catalog__item__body">
        {subcategory?.map((sub: TCategoryInfo) => (
          <li className="catalog__item__body__item" key={sub.id}>
            <Link onClick={() => setIsShown(false)} to={`/category/${sub.id}`}>
              {sub.name}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  )
}
