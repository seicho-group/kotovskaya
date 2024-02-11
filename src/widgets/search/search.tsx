import { createPortal } from 'react-dom'
import './search.css'
import { SearchProduct } from '../../entities/searchpoduct/searchproduct'
import { SearchCategory } from '../../entities/searchcategory/searchcategory';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from "./../../shared/api/config"
import { useDebounce } from '../../shared/hooks/useDebounce';
import { Product } from '../types';


export function Search(props: any) {
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
            axios.get(`${API_URL}/products/new`, {
                withCredentials: true,
              }).then((res)=>{setProductsSearchResult(res.data)})
        }
    },[debouncedValue])

  return createPortal(
    <div className="search">
      <div className='search__wrapper'>
        <div><input onChange={event => setInputState(event.target.value)} className="searchinput" type="search" placeholder='Поиск...'/></div>

        <div className='search__results'>
            <div>
                {searchProductsResult !== null ? searchProductsResult.map((product: Product) => <SearchProduct name={product.name}/>) : popularArrayForSearch.map((product: Product) => <SearchProduct name={product.name} />)}
    

        </div>
        <div>
            <SearchCategory/>
            <SearchCategory/>
            <SearchCategory/>
        </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
