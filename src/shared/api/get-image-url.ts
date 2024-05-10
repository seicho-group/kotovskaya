import { API_URL } from "src/shared/api/config"

export const getImageUrl = (id: string) => `${API_URL}/images/${id}`
