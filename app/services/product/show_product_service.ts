/* eslint-disable @typescript-eslint/naming-convention */
import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import ProductRepository from '../../repositories/product_repository.js'
import Product from '#models/product'

@inject()
export default class ShowProductService {
  constructor(private productRepository: ProductRepository) {}
  async execute(product_id: number): Promise<Product> {
    const product = await this.productRepository.findById(product_id)

    if (!product) {
      throw new Exception('Product id not exists', { status: 404 })
    }

    return product
  }
}
