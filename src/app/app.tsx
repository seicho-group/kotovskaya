import "./app.css";
import { Header } from "../header/header";
import { Navbar } from "../navbar/navbar";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "../footer/footer";
import { FooterMobile } from "../footer-mobile/footer-mobile";
import { HeaderMobile } from "../header/mobile/header-mobile";
import { DesktopRouter } from "./routers/desktop-router";
import { MobileRouter } from "./routers/mobile-router";

export function App() {
  const isMobile = document.documentElement.clientWidth < 720;
  return (
    <BrowserRouter>
      {!isMobile ? (
        <div className="app">
          <Header />
          <Navbar />
          <DesktopRouter />
          <Footer />
        </div>
      ) : (
        <div className="mobile__app">
          <HeaderMobile />
          <MobileRouter />
          <FooterMobile />
        </div>
      )}
    </BrowserRouter>
  );
}
