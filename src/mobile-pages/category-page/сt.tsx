import './category-page.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../shared/api/config';
import { ProductCardMobile } from '../../mobileentities/product-card-mobile';
import { useParams } from 'react-router-dom';
import { Product } from '../../widgets/types';
import { CategoryPanel } from '../../mobileentities/category-panel';

export function Ctm() {
    const [productsArray, setProductArray] = useState<Product[]>([]);
    console.log('New!!!!!')
    const [mockArray, setMockArray] = useState<any[]>([]);
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        axios
          .post(`${API_URL}/categories/get_category`, { category_id: id }).then((res)=>{setProductArray(res.data)})
    }, []);
    useEffect(() => {
        axios
          .get(`${API_URL}/categories/get_all`, {
            withCredentials: true,
          })
          .then((response) => {
            setMockArray(response.data)
          })
    }, [])
      const found = mockArray.find((element: any) => element.category_id == id);
      console.log(found);
      const name = found?.category_name;
      console.log(found?.category_items)

    return(
        <div>
            <div className='mobile__wrapper'>
                <p className='category__name'>{name}</p>
                {/* <div className='fff'>
                {soapmakingM.map((el)=>(<CategoryPanel category={el}/>))}
                {categories
                  .filter((key)=>(soapmakingM
                  .includes(key.category_name)))
                  .map((category) => (<CategoryPanel category={category}/>))}
                </div> */}
                <div className='fff'>
                    {found?.category_items?.map((element: any)=>(<CategoryPanel key={element.category_id} category={element}/>))}
                </div>
                <div className='productspromo__grid__mobile'>
                    {productsArray?.map((item: Product | undefined)=>( <ProductCardMobile name={item?.name} id={item?.id} quantity={item?.quantity}/>))}
                </div>
            </div>
        </div>
    )
}