import './main.css'
import { Slider } from '../widgets/slider/slider'
import mock from './../assets/mock.png'
import { ProductsPromo } from '../widgets/productsPromo/productsPromo'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../shared/api/config'

export function Main() {
  const [newArray, setNewArray] = useState<string[]>([])
  useEffect(() => {
    axios
      .get(`${API_URL}/products/new`, { withCredentials: true })
      .then((response) => {
        setNewArray(response.data)
      })
  }, [])
  const [popularArray, setPopularArray] = useState<string[]>([])
  useEffect(() => {
    axios
      .get(`${API_URL}/products/popular`, {
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
