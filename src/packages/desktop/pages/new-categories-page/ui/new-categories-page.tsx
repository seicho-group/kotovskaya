import { useEffect, useState } from "react";
import { CategoryPage } from "../../category-page/category-page";
import axios from "axios";
import { API_URL } from "../../../../../shared/api/config";

export function NewCategoriesPage() {
  const [popularFullArray, setPopularFullArray] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/new`, {
        withCredentials: true,
      })
      .then((response) => {
        setPopularFullArray(response.data);
      });
  }, []);
  return (
    <div>
      <CategoryPage category="Новинки" array={popularFullArray} />
    </div>
  );
}
