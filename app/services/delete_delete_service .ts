import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import CustomerRepository from '../repositories/customer_repository.js'

@inject()
export default class DeleteCustomerService {
  constructor(private ICustomerRepository: CustomerRepository) {}
  async execute(customer_id: number): Promise<void> {
    const findCustomer = await this.ICustomerRepository.findById(customer_id)

    if (!findCustomer) {
      throw new Exception('Customer id not exist', { status: 404 })
    }

    await this.ICustomerRepository.delete(customer_id)

    return
  }
}
