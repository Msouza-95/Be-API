/* eslint-disable @typescript-eslint/naming-convention */
import { inject } from '@adonisjs/core'

import Customer from '#models/customer'
import CustomerRepository from '../../repositories/customer_repository.js'

@inject()
export default class IndexCustomerService {
  constructor(private customerRepository: CustomerRepository) {}
  async execute(): Promise<Customer[]> {
    const customers = await this.customerRepository.findAll()

    // ordernar pelo id
    customers.sort((a, b) => (a.id < b.id ? -1 : 1))

    return customers
  }
}
