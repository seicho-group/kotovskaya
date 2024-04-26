import "./category-page.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "src/shared/types/product";
import { useParams } from "react-router-dom";
import { API_URL } from "src/shared/api/config";
import { CategoryPanel } from "src/packages/mobile/entities/category-panel";
import { ProductCardMobile } from "src/packages/mobile/entities/product-card-mobile";

export function CategoryPageMobile() {
  const [productsArray, setProductArray] = useState<Product[]>([]);

  const [mockArray, setMockArray] = useState<any[]>([]);
  let { id } = useParams<{ id: string }>();
  useEffect(() => {
    axios
      .post(`${API_URL}/categories/get_category`, { category_id: id })
      .then((res) => {
        setProductArray(res.data);
      });
  }, []);
  useEffect(() => {
    console.log("NewCategoriesPage!!!!!");
    axios
      .get(`${API_URL}/categories/get_all`, {
        withCredentials: true,
      })
      .then((response) => {
        setMockArray(response.data);
      });
  }, []);
  const found = mockArray.find((element: any) => element.category_id == id);
  console.log(found);
  const name = found?.category_name;
  console.log(found?.category_items);

  return (
    <div>
      <div className="mobile__wrapper">
        <p className="category__name">{name}</p>
        {/* <div className='fff'>
                {soapmakingM.map((el)=>(<CategoryPanel category={el}/>))}
                {categories
                  .filter((key)=>(soapmakingM
                  .includes(key.category_name)))
                  .map((category) => (<CategoryPanel category={category}/>))}
                </div> */}
        <div className="fff">
          {found?.category_items?.map((element: any) => (
            <CategoryPanel key={element.category_id} category={element} />
          ))}
        </div>
        <div className="productspromo__grid__mobile">
          {productsArray?.map((item: Product | undefined) => (
            <ProductCardMobile
              name={item?.name}
              id={item?.id}
              quantity={item?.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
