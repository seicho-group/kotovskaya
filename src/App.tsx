import './App.css'
import { Header } from './header/header'
import { Navbar } from './navbar/navbar'
import { Main } from './main/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './footer/footer'
import { Contacts } from './pages/contacts/contacts'
import { Delivery } from './pages/delivery/delivery'
import { Cart } from './pages/cart/cart'
import { ProductPage } from './pages/productpage/productpage'
import { Ordered } from './pages/ordered/ordered'
import { Popular } from './pages/popular'
import { New } from './pages/new/New'
import { Sale } from './pages/Sale/Sale'
import { HeaderMobile } from './header-mobile/headerModile'
import { MainPage } from './mobilPages/mainpage'
import { Soapmaking } from './mobilPages/soapmaking/soapmaking'
import { DeliveryMobile } from './mobilPages/DekiveryMobile/DeliveryMobile'
import { ContactsMobile } from './mobilPages/ContactsMobile/ContactsMobilex'
import { FooterMobile } from './footer-mobile/footer-mobile'
import { CategoryFullPage } from './pages/category-full-page/category-full-page'
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
          <Route path="/new" element={<New />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/test" element={<CategoryFullPage  category={"test"} />} />
        </Routes>
        <Footer />
      </div>
      {/* <div className='mobile__app'>
        <HeaderMobile />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/soapmaking" element={<Soapmaking />} />
          <Route path="/delivery" element={<DeliveryMobile/>} />
          <Route path="/contacts" element={<ContactsMobile/>} />
        </Routes>
        <FooterMobile/>
      </div> */}
    </BrowserRouter>
  )
}
