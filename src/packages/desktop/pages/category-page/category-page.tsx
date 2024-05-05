import "../../widgets/products-list/ui/products-list.css"
import mock from "src/shared/assets/mock.png"
import { ProductCard } from "../../entities/product-card/product-card"
import "./category-page.css"
import { ProductDTO } from "src/shared/types/productDTO"

export function CategoryPage(props: any) {
  const productsArray: ProductDTO[] = props.array
  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div className="wrapper">{props.category}</div>
      </div>
      <div className="productspromo__main">
        <div className="categorypage__grid">
          {productsArray.map((product: ProductDTO) => (
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
  )
}
