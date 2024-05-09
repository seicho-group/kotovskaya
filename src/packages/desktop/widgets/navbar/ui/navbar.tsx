import "./navbar.css"
import { NavButton } from "./nav-button/nav-button"
import { Link } from "react-router-dom"
import { CatalogMenu } from "../../catalog-menu/ui/catalog-menu"
import { CSSProperties, useEffect, useState } from "react"
import { createPortal } from "react-dom"

import axios from "axios"
import { ZIndex } from "src/shared/types/zIndex"

const sidebarStyles: CSSProperties = {
  position: "absolute",
  top: "100px",
  left: "0",
  backgroundColor: "transparent",
  zIndex: ZIndex.OVERLAY,
  color: "#000",
  transition: "0.2s",
}

export function Navbar() {
  const [isShown, setIsShown] = useState<boolean>(false)
  return (
    <div
      className="navbar"
      style={{
        ...sidebarStyles,
        backgroundColor: isShown ? "white" : "transparent",
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
          {createPortal(<CatalogMenu />, document.body)}
        </div>
      ) : null}
    </div>
  )
}
