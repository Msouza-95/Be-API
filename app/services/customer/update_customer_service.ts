import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'

import { UpdateCustomerDTO } from '../../contracts/dto/customer_dto.js'
import CustomerRepository from '../../repositories/customer_repository.js'
import AddressRepository from '../../repositories/address_repository.js'
import PhoneRepository from '../../repositories/phone_repository.js'
import { CustomerViewModel } from '../../view-models/customer_view_model.js'

@inject()
export default class UpdateCustomerService {
  constructor(
    private customerRepository: CustomerRepository,
    private phoneRepository: PhoneRepository,
    private addressRepository: AddressRepository
  ) {}
  async execute({
    email,
    full_name,
    cpf,
    gender,
    id,
    phone_number,
    phone_type,
    address,
    city,
    state,
    country,
    zip_code,
  }: UpdateCustomerDTO): Promise<CustomerViewModel> {
    const customer = await this.customerRepository.findById(id)

    if (!customer) {
      throw new Exception('Customer id not found', { status: 400 })
    }
    customer.cpf = cpf
    customer.email = email
    customer.gender = gender
    customer.full_name = full_name

    const phone = await this.phoneRepository.findByCustomerId(customer.id)

    if (!phone) {
      throw new Exception('Customer id in phone not found', { status: 400 })
    }
    phone.phone_number = phone_number
    phone.phone_type = phone_type

    const findAddress = await this.addressRepository.findByCustomerId(customer.id)

    if (!findAddress) {
      throw new Exception('Customer id in phone not found', { status: 400 })
    }

    findAddress.address = address
    findAddress.city = city
    findAddress.state = state
    findAddress.country = country
    findAddress.zip_code = zip_code

    await this.phoneRepository.save(phone)
    await this.addressRepository.save(findAddress)
    await this.customerRepository.save(customer)

    return CustomerViewModel.tofullHTTP(customer, phone, findAddress)
  }
}
