import { Route, Routes } from "react-router-dom";
import { Main } from "../../main/main";
import { Contacts } from "../../pages/contacts/contacts";
import { Delivery } from "../../pages/delivery/delivery";
import { Cart } from "../../pages/cart/cart";
import { ProductPage } from "../../pages/productpage/productpage";
import { Ordered } from "../../pages/ordered/ordered";
import { Popular } from "../../pages/popular";
import { New } from "../../pages/new/New";
import { Sale } from "../../pages/Sale/Sale";
import { CategoryFullPage } from "../../pages/category-full-page/category-full-page";

export const DesktopRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductPage id={123} />} />
      <Route path="/ordered" element={<Ordered />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/new" element={<New />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/test" element={<CategoryFullPage category={"test"} />} />
    </Routes>
  );
};
