/* eslint-disable @typescript-eslint/naming-convention */
import Product from '#models/product'
import { CreateProductDTO } from '../dto/product_dto.js'

export default interface IProductRepository {
  create(data: CreateProductDTO): Promise<Product>
  findById(id: number): Promise<Product | null>
  save(customer: Product): Promise<Product>
  delete(id: number): Promise<void>
  findAll(): Promise<Product[]>
  findName(name: string): Promise<Product | null>
}
