import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import ProductRepository from '../../repositories/product_repository.js'
import { CreateProductDTO } from '../../contracts/dto/product_dto.js'
import Product from '#models/product'

@inject()
export default class CreateProductService {
  constructor(private productRepository: ProductRepository) {}
  async execute({
    name,
    description,
    category,
    brand,
    price,
    stock_quantity,
    status,
  }: CreateProductDTO): Promise<Product> {
    const findProduct = await this.productRepository.findName(name)

    if (findProduct) {
      throw new Exception('Product name aready exist', { status: 404 })
    }

    const product = await this.productRepository.create({
      name,
      description,
      category,
      brand,
      price,
      stock_quantity,
      status,
    })

    return product
  }
}
