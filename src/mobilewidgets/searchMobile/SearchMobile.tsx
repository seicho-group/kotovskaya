import "./SearchMobile.css"
import { createPortal } from 'react-dom'
import { SearchProduct } from '../../entities/searchpoduct/searchproduct'
import { SearchCategory } from '../../entities/searchcategory/searchcategory';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from "./../../shared/api/config"
import { useDebounce } from '../../shared/hooks/useDebounce';
import { Product } from './../../widgets/types';
import { SearchProductMobile } from "../../mobileentities/SearchProductMobile/SearcProductMobile";

export function SearchMobile() {
    const [inputState, setInputState] = useState<string>("");
    const debouncedValue = useDebounce(inputState);
    const [popularArrayForSearch, setPopularArrayForSearch] = useState<Product[]>([])
    const [searchProductsResult, setProductsSearchResult] = useState<any>(null)
    useEffect(() => {
      axios
        .get(`${API_URL}/products/popular`, {
          withCredentials: true,
        })
        .then((response) => {
          setPopularArrayForSearch(response.data)
        })
    }, [])
    console.log(popularArrayForSearch)
    useEffect(()=>{
        if (debouncedValue) {
            axios.post(`${API_URL}/products/search_for_product`, {
                text: debouncedValue
              }).then((res)=>{setProductsSearchResult(res.data)})
        }
    },[debouncedValue])

  return createPortal(
    <div className="searchM">
      <div className='search__wrapperM'>
        <div><input onChange={event => setInputState(event.target.value)} className="searchinputM" type="search" placeholder='Поиск...'/></div>

        <div className='search__resultsM'>
            <div>
                {searchProductsResult !== null ? searchProductsResult.map((product: Product) => <SearchProductMobile name={product.name}/>) : popularArrayForSearch.map((product: Product) => <SearchProductMobile name={product.name} />)}
    

        </div>
    
        </div>
      </div>
    </div>,
    document.body
  )
}

