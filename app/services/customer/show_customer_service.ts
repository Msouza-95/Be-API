/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { inject } from '@adonisjs/core'

import Customer from '#models/customer'
import { Exception } from '@adonisjs/core/exceptions'
import CustomerRepository from '../../repositories/customer_repository.js'

interface IRequest {
  customer_id: number
  month: number
  year: number
}

@inject()
export default class ShowCustomerService {
  constructor(private customerRepository: CustomerRepository) {}
  async execute({ customer_id, month, year }: IRequest): Promise<Customer> {
    const customerProduct = await this.customerRepository.findById(customer_id)

    if (!customerProduct) {
      throw new Exception('Customer id not exists', { status: 404 })
    }

    customerProduct.sales.sort((a, b) => (a.date_time > b.date_time ? -1 : 1))

    if (month) {
      const sales = customerProduct.sales.filter(
        (sale) => sale.date_time.getUTCMonth() == month - 1
      )
    }

    if (year) {
      const sales = customerProduct.sales.filter((sale) => sale.date_time.getUTCFullYear() == year)
    }

    // console.log(customerProduct.sales[3].date_time.getMonth())
    // console.log(year)

    return customerProduct
  }
}
