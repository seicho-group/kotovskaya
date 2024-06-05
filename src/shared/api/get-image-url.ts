import { API_URL } from "src/shared/api/config"

export const getImageUrl = (id: string) =>
  `${API_URL}/images/${id.split(".")[0]}/0.jpg`
