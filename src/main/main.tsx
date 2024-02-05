import './main.css'
import { ProductCard } from '../entities/productCard/productCard'
import { Slider } from '../widgets/slider/slider'
import mock from './../assets/mock.png'
import { ProductsPromo } from '../widgets/productsPromo/productsPromo'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function Main() {
  const [newArray, setNewArray] = useState<string[]>([])
  useEffect(() => {
    axios
      .get('http://95.182.120.200:8080/products/new', { withCredentials: true })
      .then((response) => {
        setNewArray(response.data)
      })
  }, [])
  const [popularArray, setPopularArray] = useState<string[]>([])
  useEffect(() => {
    axios
      .get('http://95.182.120.200:8080/products/popular', {
        withCredentials: true,
      })
      .then((response) => {
        setPopularArray(response.data)
      })
  }, [])

  return (
    <div className="main">
      <Slider />
      <ProductsPromo category={'Новинки'} array={newArray} link={'new'} />
      <ProductsPromo
        category={'Популярное'}
        array={popularArray}
        link={'popular'}
      />
      <ProductsPromo category={'Распродажа'} array={[]} link={'sale'} />
    </div>
  )
}
