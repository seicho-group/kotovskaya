import axios from "axios";
import { API_URL } from "../config";

export async function requestProduct(id: string) {
  return await axios
    .get(`${API_URL}/products/get_product/${id}`)
    .then((response) => {
      // console.log(response)
      return response.data;
    });
}
