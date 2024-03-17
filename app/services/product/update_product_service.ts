import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'

import { UpdateProductDTO } from '../../contracts/dto/product_dto.js'
import ProductRepository from '../../repositories/product_repository.js'
import Product from '#models/product'

@inject()
export default class UpdateProductService {
  constructor(private productRepository: ProductRepository) {}
  async execute({
    name,
    description,
    category,
    brand,
    price,
    stock_quantity,
    status,
    id,
  }: UpdateProductDTO): Promise<Product> {
    const product = await this.productRepository.findById(id)

    if (!product) {
      throw new Exception('Product id not found', { status: 400 })
    }
    product.name = name
    product.description = description
    product.category = category
    product.brand = brand
    product.price = price
    product.stock_quantity = stock_quantity
    product.status = status

    return await this.productRepository.save(product)
  }
}
