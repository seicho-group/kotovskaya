import "../../widgets/products-list/ui/products-list.css";
import mock from "src/shared/assets/mock.png";
import { ProductCard } from "../../entities/productCard/productCard";
import "./category-page.css";
import { Product } from "src/shared/types/product";

export function CategoryPage(props: any) {
  const productsArray: Product[] = props.array;
  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div className="wrapper">{props.category}</div>
      </div>
      <div className="productspromo__main">
        <div className="categorypage__grid">
          {productsArray.map((product: Product) => (
            <ProductCard
              id={product.id}
              photo={mock}
              name={product.name}
              price={product?.salePrices?.[0]?.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
