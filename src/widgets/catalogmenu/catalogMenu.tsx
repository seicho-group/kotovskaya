import './catalogmenu.css'
import { CatalogMenuFolder } from '../catalogmenufolder/catalogmenufolder'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import pic from './../../assets/sidepromo.png'
import { CatalogItem } from '../../entities/productCard/catalogItem'
import axios from 'axios';
import { API_URL } from '../../shared/api/config'

export function CatalogMenu(props: any) {
  const [categories, setCategories] = useState<string[]>([])
  useEffect(() => {
    axios
      .get(`${API_URL}/categories`, { withCredentials: true })
      .then((response) => {
        setCategories(response.data)
      })
  }, [])
  console.log(categories)
  return createPortal(
    <div className="menu">
      <div className="catalog__row">
        <p className="catalog__h1">Мыловарение</p>
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Cвечеварение</p>
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
      </div>
      <div className="catalog__row">
        <p className="catalog__h1">Косметика ручной работы</p>
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
        <CatalogItem category="Мыльная основа" subcategory="Жидкая основа" />
      </div>
      <div className="catalog__sidepromo">
        <img className="catalog__sidepromo__pic" src={pic} />
        <div className="catalog__sidepromo__h1">Скидки до -40% </div>
        <div className="catalog__sidepromo__p">на все категории товаров</div>
      </div>
    </div>,
    document.body
  )
}
