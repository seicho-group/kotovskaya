import './catalogItem.css'
export function CatalogItem({ category, subcategory }: { category: string, subcategory: string[] }) {
  return (
    <div className="catalog__item">
      <div className="catalog__item__h1">{category}</div>
      <div className="catalog__item__body"> {subcategory.map((sub:string) => <div className="catalog__item__body__item">{sub}</div> )} </div>
    </div>
  )
}
