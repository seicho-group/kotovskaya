import { useSearchStore } from "../../mobilewidgets/searchMobile/search-mobile"
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../shared/api/config";
import { Product } from "../../widgets/types";
import { ProductCardMobile } from "../../mobileentities/product-card-mobile";
import { SearchProductMobile } from "../../mobileentities/SearchProductMobile/search-product-mobile";
export function ShowAllResults() {
    const [productsSearchResultAll, setProductsSearchResultAll] = useState<Product[]>([]);
    const { searchRequest, setWord } = useSearchStore();
    console.log(searchRequest)
    console.log(123)
    useEffect(()=>{
            axios.post(`${API_URL}/products/search_for_product`, {
                text: searchRequest
              }).then((res)=>{setProductsSearchResultAll(res.data)}
              )}
    ,[])

    return(
        <div className="mobile__wrapper">
        
        <div className='productspromo__grid__mobile'>{productsSearchResultAll.map((product: Product) => <ProductCardMobile name={product?.name} id={product?.id}/>)}
</div>
        </div>
    )
}