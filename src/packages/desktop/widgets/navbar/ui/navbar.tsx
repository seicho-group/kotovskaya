import "./navbar.css"
import { NavButton } from "./nav-button/nav-button"
import { Link } from "react-router-dom"
import { CatalogMenu } from "../../catalog-menu/ui/catalog-menu"
import { CSSProperties, useEffect, useState } from "react"
import { createPortal } from "react-dom"

import axios from "axios"
import { ZIndex } from "src/shared/types/zIndex"

const sidebarStyles: CSSProperties = {
  position: "sticky",
  top: "0",
  left: "0",
  backgroundColor: "transparent",
  zIndex: ZIndex.OVERLAY,
  color: "#000",
  transition: "0.2s",
}

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [isShown, setIsShown] = useState<boolean>(false)
  return (
    <>
    <div
      className="navbar"
      style={{
        ...sidebarStyles,
        backgroundColor:
          isShown || scrollPosition > 100 ? "white" : "transparent",
        boxShadow:
          scrollPosition > 100 ? "0px 0px 3px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div
        onMouseEnter={() => {
          setIsShown(true)
        }}
        onMouseLeave={() => {
          setIsShown(false)
        }}
        style={{ color: "inherit" }}
      >
        <NavButton category="каталог" />
      </div>
      <Link to="new">
        <NavButton category="новинки" />
      </Link>
      <Link to="popular">
        <NavButton category="популярное" />
      </Link>
      <Link to="sale">
        <NavButton category="распродажа" />
      </Link>
      <Link to="delivery">
        <NavButton category="доставка" />
      </Link>
      <Link to="contacts">
        <NavButton category="контакты" />
      </Link>

      {isShown ? (
        <div
          onMouseEnter={() => {
            setIsShown(true)
          }}
          onMouseLeave={() => setIsShown(false)}
        >
          <CatalogMenu setIsShown={setIsShown} />
        </div>
      ) : null}
    </div>
    </>
  )
}
