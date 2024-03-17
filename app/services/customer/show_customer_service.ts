/* eslint-disable @typescript-eslint/naming-convention */
import { inject } from '@adonisjs/core'

import Customer from '#models/customer'
import { Exception } from '@adonisjs/core/exceptions'
import CustomerRepository from '../../repositories/customer_repository.js'

@inject()
export default class ShowCustomerService {
  constructor(private customerRepository: CustomerRepository) {}
  async execute(customer_id: number): Promise<Customer> {
    const customerProduct = await this.customerRepository.findById(customer_id)

    if (!customerProduct) {
      throw new Exception('Customer id not exists', { status: 404 })
    }

    return customerProduct
  }
}
