import "./app.css";
import { Header } from "../packages/desktop/widgets/header/ui/header";
import { Navbar } from "../packages/desktop/widgets/navbar/ui/navbar";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "../packages/desktop/widgets/footer/ui/footer";
import { FooterMobile } from "../packages/mobile/widgets/footer/ui/footer-mobile";
import { HeaderMobile } from "../packages/mobile/widgets/header/ui/header-mobile";
import { DesktopRouter } from "../packages/desktop/app/routers/desktop-router";
import { MobileRouter } from "../packages/mobile/app/routers/mobile-router";
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
