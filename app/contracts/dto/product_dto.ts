import { StatusEnum } from '../enum/enums.js'

export interface CreateProductDTO {
  name: string
  description: string
  category: string
  brand: string
  price: number
  stock_quantity: number
  status: StatusEnum
}

export interface UpdateProductDTO {
  id: number
  name: string
  description: string
  category: string
  brand: string
  price: number
  stock_quantity: number
  status: StatusEnum
}
