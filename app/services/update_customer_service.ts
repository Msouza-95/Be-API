import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import CustomerRepository from '../repositories/customer_repository.js'
import Customer from '#models/customer'
import { UpdateCustomerDTO } from '../contracts/dto/customer_dto.js'

@inject()
export default class UpdateCustomerService {
  constructor(private ICustomerRepository: CustomerRepository) {}
  async execute({ email, full_name, cpf, gender, id }: UpdateCustomerDTO): Promise<Customer> {
    const customer = await this.ICustomerRepository.findById(id)

    if (!customer) {
      throw new Exception('Customer id not found', { status: 400 })
    }
    customer.cpf = cpf
    customer.email = email
    customer.gender = gender
    customer.full_name = full_name

    return await this.ICustomerRepository.save(customer)
  }
}
