import "./main.css";
import { Slider } from "../../../../../shared/ui/slider/ui/slider";
import { ProductsList } from "../../../widgets/products-list/ui/products-list";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../../../shared/api/config";

export function Main() {
  const [newArray, setNewArray] = useState<string[]>([]);
  const [popularArray, setPopularArray] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/new`, { withCredentials: true })
      .then((response) => {
        setNewArray(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        setPopularArray(response.data);
      });
  }, []);

  return (
    <div className="main">
      <Slider />
      <ProductsList category={"Новинки"} array={newArray} link={"new"} />
      <ProductsList
        category={"Популярное"}
        array={popularArray}
        link={"popular"}
      />
      <ProductsList category={"Распродажа"} array={[]} link={"sale"} />
    </div>
  );
}
