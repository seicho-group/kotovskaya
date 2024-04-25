import './soapmaking.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../shared/api/config";
import { CategoryPanel } from '../../mobileentities/category-panel';
import { ProductCardMobile } from '../../mobileentities/product-card-mobile';
import { Product } from '../../widgets/types';

export type Category = {
  category_name: string,
  category_id: string,
  category_items: Category[]
}

export function Soapmaking() {
  const [products, setProducts] = useState([]);
  const [soapmakingSoapBases, setSoapmakingSoapBases] = useState([]);
    const soapmakingM = ["Базовые масла", "Инcтрументы и приспособления", "Мыльная основа", "Щелочь", "Формы", "Красители", "Отдушки"];
    const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    axios
      .get<Category[]>(`${API_URL}/categories/get_all`, { withCredentials: true })
      .then((response) => {
        
        setCategories(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .post(`${API_URL}/categories/get_category`, { category_id: "0ce6b1e6-7205-4def-b499-6288cf4e7fde" }).then((res)=>{setProducts(res.data)})}, [])
      ;
      useEffect(() => {
        axios
          .post(`${API_URL}/categories/get_category`, { category_id: "19be723c-cd2b-4c6d-8947-d07f5c5cc7da" }).then((res)=>{setSoapmakingSoapBases(res.data)})}, [])
          ;
    return(
        <div>
            <div className='mobile__wrapper'>
                <p className='category__name'>Мыловарение</p>
                <div className='fff'>
                {/* {soapmakingM.map((el)=>(<CategoryPanel category={el}/>))} */}
                {categories
                  .filter((key)=>(soapmakingM
                  .includes(key.category_name)))
                  .map((category) => (<CategoryPanel category={category}/>))}
                </div>
                <div className='productspromo__grid__mobile'>
                    {products.map((item: Product | undefined)=>( <ProductCardMobile name={item?.name} id={item?.id} quantity={item?.quantity} price={item?.salePrices[0].value}/>))}
                    {soapmakingSoapBases.map((item: Product| undefined)=>( <ProductCardMobile name={item?.name} id={item?.id}/>))}
                </div>
            </div>
        </div>
    )
}