import { useEffect, useState } from "react";
import { CategoryPage } from "./categorypage/categoryPage"
import axios from "axios";

export function Popular() {
    const [popularFullArray, setPopularFullArray] = useState<string[]>([]);
    useEffect(() => {
        axios.get("http://95.182.120.200:8080/products/popular", {withCredentials: true}).then((response) => {
            setPopularFullArray(response.data);});  }, []);
    return(
        <div>
            <CategoryPage  category="Популярное" array={popularFullArray}/>
        </div>
    )
}