import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import { CreateCustomerDTO } from '../contracts/dto/customer_dto.js'
import CustomerRepository from '../repositories/customer_repository.js'
import Customer from '#models/customer'

@inject()
export default class CreateCustomerService {
  constructor(private ICustomerRepository: CustomerRepository) {}
  async execute({ email, full_name, cpf, gender }: CreateCustomerDTO): Promise<Customer> {
    const findCustomer = await this.ICustomerRepository.findByCPF(cpf)

    if (findCustomer) {
      throw new Exception('Customer cpf aready exist', { status: 404 })
    }

    const findCustomerByEmail = await this.ICustomerRepository.findByEmail(email)

    if (findCustomerByEmail) {
      throw new Exception('Customer email aready exist', { status: 404 })
    }
    const customer = await this.ICustomerRepository.create({ email, full_name, cpf, gender })

    return customer
  }
}
