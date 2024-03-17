/* eslint-disable @typescript-eslint/naming-convention */
import { inject } from '@adonisjs/core'

import ProductRepository from '../../repositories/product_repository.js'
import Product from '#models/product'

@inject()
export default class IndexProductService {
  constructor(private productRepository: ProductRepository) {}
  async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAll()

    // ordernar pelo id
    products.sort((a, b) => (a.name < b.name ? -1 : 1))

    return products
  }
}
