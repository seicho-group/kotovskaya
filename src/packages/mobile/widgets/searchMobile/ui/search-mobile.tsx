import "./search-mobile.css";
import { createPortal } from "react-dom";
import { SearchProduct } from "../../../../../entities/searchpoduct/searchproduct";
import { SearchCategory } from "../../../../../entities/searchcategory/searchcategory";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../../shared/api/config";
import { useDebounce } from "../../../../../shared/hooks/useDebounce";
import { Product } from "../../../../../shared/types/product";
import { SearchProductMobile } from "../../../entities/SearchProductMobile/search-product-mobile";
import { create } from "zustand";
import { Link } from "react-router-dom";
import { useSearchIsClicked } from "../../header/ui/header-mobile";

type TSearchStore = {
  searchRequest: string;
  setWord: (input: string) => void;
};

export const useSearchStore = create<TSearchStore>((set) => ({
  searchRequest: "",
  setWord: (searchRequest: string) =>
    set(() => ({ searchRequest: searchRequest })),
}));

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }

export function SearchMobile(props: any) {
  const { searchIsClicked, setSearchIsOpened, setSearchIsClosed } =
    useSearchIsClicked();
  const { searchRequest, setWord } = useSearchStore();
  const setIsClicked = props.setIsClicked;
  const [inputState, setInputState] = useState<string>("");
  const debouncedValue = useDebounce(inputState);
  const [popularArrayForSearch, setPopularArrayForSearch] = useState<Product[]>(
    []
  );
  const [searchProductsResult, setProductsSearchResult] = useState<any>(null);
  console.log(searchRequest);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        setPopularArrayForSearch(response.data);
      });
  }, []);
  console.log(popularArrayForSearch);
  useEffect(() => {
    if (debouncedValue) {
      axios
        .post(`${API_URL}/products/search_for_product`, {
          text: debouncedValue,
        })
        .then((res) => {
          setProductsSearchResult(res.data);
        });
    }
  }, [debouncedValue]);

  return createPortal(
    <div className="searchM">
      <div className="search__wrapperM">
        <div>
          <input
            onChange={(event) => setInputState(event.target.value)}
            className="searchinputM"
            type="search"
            placeholder="Поиск..."
          />
        </div>

        <div className="search__resultsM">
          <div>
            {searchProductsResult !== null
              ? searchProductsResult.map((product: Product) => (
                  <SearchProductMobile
                    setIsClicked={setIsClicked}
                    id={product.id}
                    name={product.name}
                  />
                ))
              : popularArrayForSearch.map((product: Product) => (
                  <SearchProductMobile
                    setIsClicked={setIsClicked}
                    name={product.name}
                  />
                ))}
          </div>
        </div>
        <Link to="/showallresults">
          <div
            onClick={() => {
              setWord(debouncedValue || "");
              setSearchIsClosed();
            }}
          >
            показать все результаты
          </div>
        </Link>
      </div>
    </div>,
    document.body
  );
}
