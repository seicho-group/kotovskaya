import "./app.css";
import { Header } from "./header/header";
import { Navbar } from "./navbar/navbar";
import { Main } from "./main/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./footer/footer";
import { Contacts } from "./pages/contacts/contacts";
import { Delivery } from "./pages/delivery/delivery";
import { Cart } from "./pages/cart/cart";
import { ProductPage } from "./pages/productpage/productpage";
import { Ordered } from "./pages/ordered/ordered";
import { Popular } from "./pages/popular";
import { MainPage } from "./mobile-pages/mainpage";
import { Soapmaking } from "./mobile-pages/soapmaking/soapmaking";
import { DeliveryMobile } from "./mobile-pages/DekiveryMobile/DeliveryMobile";
import { ContactsMobile } from "./mobile-pages/ContactsMobile/ContactsMobilex";
import { FooterMobile } from "./footer-mobile/footer-mobile";
import { CategoryFullPage } from "./pages/category-full-page/category-full-page";
import { CartMobile } from "./mobile-pages/cart-mobile/cart-mobile";
import { ProductPageMobile } from "./mobile-pages/product-page-mobile/product-page-mobile";
import { HeaderMobile } from "./header/mobile/header-mobile";
import { Sale } from "./pages/Sale/Sale";
import { New } from "./pages/new/New";
import { useState } from "react";
export function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  return (
    <BrowserRouter>
      {!isMobile ? (
        <div className="App">
          <Header />
          <Navbar />
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
            <Route
              path="/test"
              element={<CategoryFullPage category={"test"} />}
            />
          </Routes>
          <Footer />
        </div>
      ) : (
        <div className="mobile__app">
          <HeaderMobile />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/soapmaking" element={<Soapmaking />} />
            <Route path="/delivery" element={<DeliveryMobile />} />
            <Route path="/contacts" element={<ContactsMobile />} />
            <Route path="/cartmobile" element={<CartMobile />} />
            <Route
              path="/product/:id"
              element={<ProductPageMobile id={123} />}
            />
          </Routes>
          <FooterMobile />
        </div>
      )}
    </BrowserRouter>
  );
}
