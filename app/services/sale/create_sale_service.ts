/* eslint-disable @typescript-eslint/naming-convention */
import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import ProductRepository from '../../repositories/product_repository.js'
import Sale from '#models/sale'
import SaleRepository from '../../repositories/sale_repository.js'
import CustomerRepository from '../../repositories/customer_repository.js'

interface IRequest {
  customer_id: number
  product_id: number
  quantity: number
  unit_price: number
}

@inject()
export default class CreateSaleService {
  constructor(
    private salesRepository: SaleRepository,
    private customerRepository: CustomerRepository,
    private productRepository: ProductRepository
  ) {}
  async execute({ customer_id, product_id, quantity, unit_price }: IRequest): Promise<Sale> {
    // calcular valor da venda
    const total_price = unit_price * quantity

    const date_time = new Date()

    const findCostumer = await this.customerRepository.findById(customer_id)

    if (!findCostumer) {
      throw new Exception('Customer id not exist', { status: 404 })
    }

    const findProduct = await this.productRepository.findById(product_id)

    if (!findProduct) {
      throw new Exception('Product id not exist', { status: 404 })
    }

    const newSale = await this.salesRepository.create({
      customer_id,
      product_id,
      quantity,
      unit_price,
      date_time,
      total_price,
    })

    return newSale
  }
}
