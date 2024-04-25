import "./catalogmenu.css";
import { useState, useEffect } from "react";
import { CatalogItem } from "../../../entities/productCard/catalogItem";
import axios from "axios";
import { API_URL } from "src/shared/api/config";

const soapmaking = [
  "Базовые масла",
  "Инcтрументы и приспособления",
  "Мыльная основа",
  "Щелочь",
  "Формы",
];
const soapmaking2 = ["Красители", "Отдушки"];
const candlesmaking = ["Все для свечей"];
const cosmeticsmaking = ["Компоненты для косметики"];

export function CatalogMenu(props: any) {
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/categories/get_all`, { withCredentials: true })
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  return (
    <div className="menu">
      <div className="catalog__row">
        <p className="catalog__h1">Мыловарение</p>
        {Object.entries(categories)
          .filter(([key]) => soapmaking.includes(key))
          .map(([key, value]) => (
            <CatalogItem key={key} category={key} subcategory={value} />
          ))}
      </div>
      <div className="catalog__row__noh1">
        {Object.entries(categories)
          .filter(([key]) => soapmaking2.includes(key))
          .map(([key, value]) => (
            <CatalogItem category={key} subcategory={value} />
          ))}
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Cвечеварение</p>
        {Object.entries(categories)
          .filter(([key, value]) => candlesmaking.includes(key))
          .map(([key, value]) => (
            <CatalogItem category={key} subcategory={value} />
          ))}
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Косметика ручной работы</p>
        {Object.entries(categories)
          .filter(([key, value]) => cosmeticsmaking.includes(key))
          .map(([key, value]) => (
            <CatalogItem category={key} subcategory={value} />
          ))}
      </div>
    </div>
  );
}
