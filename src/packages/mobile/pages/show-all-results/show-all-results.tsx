import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchStore } from "src/packages/mobile/widgets/searchMobile/ui/search-mobile";
import { Product } from "src/shared/types/product";
import { API_URL } from "src/shared/api/config";
import { ProductCardMobile } from "src/packages/mobile/entities/product-card-mobile";

export function ShowAllResults() {
  const [productsSearchResultAll, setProductsSearchResultAll] = useState<
    Product[]
  >([]);
  const { searchRequest, setWord } = useSearchStore();

  useEffect(() => {
    axios
      .post(`${API_URL}/products/search_for_product`, {
        text: searchRequest,
      })
      .then((res) => {
        setProductsSearchResultAll(res.data);
      });
  }, []);

  return (
    <div className="mobile__wrapper">
      <div className="productspromo__grid__mobile">
        {productsSearchResultAll.map((product: Product) => (
          <ProductCardMobile name={product?.name} id={product?.id} />
        ))}
      </div>
    </div>
  );
}
