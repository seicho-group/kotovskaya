import './navbar.css'
import { NavButton } from './navbutton/navbutton'
import { Link } from 'react-router-dom'
import { CatalogMenu } from '../widgets/catalogmenu/catalogMenu'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import axios from 'axios'

export function Navbar() {
  const categoriesArray = [
    {
      'Мыльная основа':
        'Жидкая основа, Цветная мыльная основа, Кремовая основа, Желе основа',
    },
  ]
  // const [categories, setCategories] = useState<string[]>([]);
  // useEffect(() => {
  //   axios
  //     .get("http://192.168.0.121:8080/groups/get", {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       setCategories(response.data.folders);
  //     });
  // }, []);
  console.log(categoriesArray)
  const [isShown, setIsShown] = useState<boolean>(false)
  return (
    <div className="navbar">
      <div
        onMouseEnter={() => {
          setIsShown(true)
        }}
        onMouseLeave={() => {
          setIsShown(false)
        }}
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
          {createPortal(<CatalogMenu categories={categoriesArray} />, document.body)
          }
        </div>
      ) : null}
    </div>
  )
}
