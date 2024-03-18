import './soapmaking.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../shared/api/config";
import { CategoryPanel } from '../../mobileentities/category-panel';
export function Soapmaking() {
    const soapmakingM = ["Базовые масла", "Инcтрументы и приспособления", "Мыльная основа", "Щелочь", "Формы", "Красители", "Отдушки"];
    const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/categories/get_all`, { withCredentials: true })
      .then((response) => {
        
        setCategories(response.data);
      });
  }, []);
    return(
        <div>
            <div className='mobile__wrapper'>
                <p>Мыловарение</p>
                <div className='fff'>
                {/* {soapmakingM.map((el)=>(<CategoryPanel category={el}/>))} */}
                {Object.entries(categories).filter(([key, value])=>(soapmakingM.includes(key))).map(([key, value]) => (<CategoryPanel category={key}/>))}
                </div>
            </div>
        </div>
    )
}