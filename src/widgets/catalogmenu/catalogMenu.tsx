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
  console.log("123");
  return (
    <div className="menu">
      <div className="catalog__row">
        <p className="catalog__h1">Мыловарение</p>
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        {Object.entries(categories).map(() => null)}
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Cвечеварение</p>
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Косметика ручной работы</p>
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
      </div>
      <div className="catalog__sidepromo">
        <img className="catalog__sidepromo__pic" src={pic} />
        <div className="catalog__sidepromo__h1">Скидки до -40% </div>
        <div className="catalog__sidepromo__p">на все категории товаров</div>
      </div>
    </div>
  );
}
