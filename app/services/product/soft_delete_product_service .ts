import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import ProductRepository from '../../repositories/product_repository.js'
import { StatusEnum } from '../../contracts/enum/enums.js'

@inject()
export default class SoftDeleteProductService {
  constructor(private productRepository: ProductRepository) {}
  async execute(product_id: number): Promise<void> {
    const product = await this.productRepository.findById(product_id)

    if (!product) {
      throw new Exception('Product id not exist', { status: 404 })
    }

    product.status = StatusEnum.INATIVO

    await this.productRepository.save(product)

    return
  }
}
