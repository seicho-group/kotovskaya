import "./catalogItem.css";
import { TCategory } from "src/packages/desktop/widgets/catalog-menu/ui/catalogMenu";

export function CatalogItem({
  category,
  subcategory,
}: {
  category: string;
  subcategory: TCategory[] | null;
}) {
  return (
    <div className="catalog__item">
      <div className="catalog__item__h1">{category}</div>
      <div className="catalog__item__body">
        {subcategory?.map((sub: TCategory) => (
          <div className="catalog__item__body__item">{sub.category_name}</div>
        ))}
      </div>
    </div>
  );
}
