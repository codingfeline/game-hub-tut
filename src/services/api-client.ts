import axios from "axios"

export interface FetchResponse<T> {
  count: number
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bc4db41d96c644a7b0d6535d2f9122cf'
  }
})