import "./catalogmenu.css";
import { CatalogMenuFolder } from "../catalogmenufolder/catalogmenufolder";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import pic from "./../../assets/sidepromo.png";
import { CatalogItem } from "../../entities/productCard/catalogItem";
import axios from "axios";
import { API_URL } from "../../shared/api/config";

export function CatalogMenu(props: any) {
  const soapArray = [];
  const candleArray = [];
  const cosmeticsArray = [];
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/categories/get_all`, { withCredentials: true })
      .then((response) => {
        setCategories(response.data);
      });
  }, []);
  console.log(categories);
  const soapmaking = ["Базовые масла", "Инcтрументы и приспособления", "Мыльная основа", "Щелочь", "Формы"];
  const soapmaking2 = ["Красители",  "Отдушки"];
  const candlesmaking = ["Все для свечей"];
  const cosmeticsmaking = ["Компоненты для косметики"];
  const others = {};
  let soapmakingResult = {}
  // for (let key in categories){
  //   if (soapmaking.includes(key)){
  //       soapmakingResult[key as string]=123
  //   }
  // }
  // useEffect(()=>{}, )
  
  return (
    <div className="menu">
      <div className="catalog__row">
        <p className="catalog__h1">Мыловарение</p>
        {/* <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" /> */}
        {Object.entries(categories).filter(([key, value])=>(soapmaking.includes(key))).map(([key, value]) => (<CatalogItem category={key} subcategory={value}/>))}
        {/* {Object.keys(categories)} */}
      </div>
      <div className="catalog__row__noh1">
      {Object.entries(categories).filter(([key, value])=>(soapmaking2.includes(key))).map(([key, value]) => (<CatalogItem category={key} subcategory={value}/>))}
        {/* <img className="catalog__sidepromo__pic" src={pic} />
        <div className="catalog__sidepromo__h1">Скидки до -40% </div>
        <div className="catalog__sidepromo__p">на все категории товаров</div> */}
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Cвечеварение</p>
        {Object.entries(categories).filter(([key, value])=>(candlesmaking.includes(key))).map(([key, value]) => (<CatalogItem category={key} subcategory={value}/>))}
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Косметика ручной работы</p>
        {Object.entries(categories).filter(([key, value])=>(cosmeticsmaking.includes(key))).map(([key, value]) => (<CatalogItem category={key} subcategory={value}/>))}
      </div>
      
    </div>
  );
}
