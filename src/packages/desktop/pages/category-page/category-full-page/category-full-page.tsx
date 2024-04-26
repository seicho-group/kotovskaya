import "./category-full-page.css";
import { Product } from "../../../../../shared/types/product";
import { Subactegory } from "../../../entities/subcategory/subcategory";

export function CategoryFullPage(props: any) {
  const array123 = ["масло", "гель", "мыло", "бальзам"];
  const productsArray: Product[] = props.array;
  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div className="wrapper">{props.category}</div>
      </div>
      <div className="productspromo__subcategories__wrapper">
        <div className="productspromo__subcategories">
          {array123.map((el) => (
            <Subactegory subcategory={el} />
          ))}
        </div>
      </div>
      <div className="productspromo__main">
        <div className="categorypage__grid">
          {/* {productsArray.map((product: Product) => (
            <ProductCard
              id={product.id}
              photo={mock}
              name={product.name}
              price={product?.salePrices?.[0]?.value}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}
