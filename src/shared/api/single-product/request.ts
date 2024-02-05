import axios from 'axios'
import { API_URL } from '../config'

export async function requestProducts(id: string) {
  return await axios.get(`${API_URL}/groups/get/${id}`).then((response) => {
    console.log(response)
    return response.data[0]
  })
}
