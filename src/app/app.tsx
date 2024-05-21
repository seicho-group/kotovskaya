import "./app.css"
import { Header } from "../packages/desktop/widgets/header/ui/header"
import { Navbar } from "../packages/desktop/widgets/navbar/ui/navbar"
import { BrowserRouter } from "react-router-dom"
import { Footer } from "../packages/desktop/widgets/footer/ui/footer"
import { FooterMobile } from "../packages/mobile/widgets/footer/ui/footer-mobile"
import { HeaderMobile } from "../packages/mobile/widgets/header/ui/header-mobile"
import { DesktopRouter } from "../packages/desktop/app/routers/desktop-router"
import { MobileRouter } from "../packages/mobile/app/routers/mobile-router"
import { createContext, useEffect, useState } from "react"

export const IsMobileContext = createContext<{ isMobile: boolean }>({
  isMobile: false,
})

export function App() {
  const [isMobile, setIsMobile] = useState(
    document.documentElement.clientWidth < 1100,
  )

  useEffect(() => {
    const onResize = () => {
      setIsMobile(document.documentElement.clientWidth < 1100)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <BrowserRouter>
      <IsMobileContext.Provider value={{ isMobile }}>
        {!isMobile ? (
          <div className="app">
            <header>
              <Header />
              <Navbar />
            </header>
            <main style={{ minHeight: "calc(100vh - 610px)" }}>
              <div style={{ height: "50px" }} />
              <DesktopRouter />
            </main>
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
  )
}
