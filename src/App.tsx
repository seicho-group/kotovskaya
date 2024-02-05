import "./App.css";
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
export function App() {
  return (
    <BrowserRouter>
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
          {/* <Route path="/new" element={<New />} />
          <Route path="/sale" element={<Sale />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
