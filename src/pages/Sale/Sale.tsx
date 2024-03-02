import { useEffect, useState } from 'react'
import { CategoryPage } from './../categorypage/categoryPage'
import axios from 'axios'
import { API_URL } from '../../shared/api/config'

export function Sale() {
  const [popularFullArray, setPopularFullArray] = useState<string[]>([])
  useEffect(() => {
    axios
      .get(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        setPopularFullArray(response.data)
      })
  }, [])
  return (
    <div>
      <CategoryPage category="Распродажа" array={popularFullArray} />
      
    </div>
  )
}
