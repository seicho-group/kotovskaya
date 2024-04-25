import "./app.css";
import { Header } from "../widgets/header/ui/header";
import { Navbar } from "../widgets/navbar/ui/navbar";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "../widgets/footer/ui/footer";
import { FooterMobile } from "../widgets/footer/ui/mobile/footer-mobile";
import { HeaderMobile } from "../widgets/header/ui/mobile/header-mobile";
import { DesktopRouter } from "./routers/desktop-router";
import { MobileRouter } from "./routers/mobile-router";
import { createContext } from "react";

export const IsMobileContext = createContext<{ isMobile: boolean }>({
  isMobile: false,
});

export function App() {
  const isMobile = document.documentElement.clientWidth < 720;
  return (
    <BrowserRouter>
      <IsMobileContext.Provider value={{ isMobile }}>
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
      </IsMobileContext.Provider>
    </BrowserRouter>
  );
}
