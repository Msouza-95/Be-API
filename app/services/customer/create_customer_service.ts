/* eslint-disable @typescript-eslint/naming-convention */
import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import CustomerRepository from '../../repositories/customer_repository.js'
import { GenderEnum, PhoneTypeEnum } from '../../contracts/enum/enums.js'
import AddressRepository from '../../repositories/address_repository.js'
import PhoneRepository from '../../repositories/phone_repository.js'
import { CustomerViewModel } from '../../view-models/customer_view_model.js'

interface IRquest {
  email: string
  cpf: string
  gender: GenderEnum
  full_name: string
  phone_number: string
  phone_type: PhoneTypeEnum
  address: string
  city: string
  state: string
  country: string
  zip_code: string
}

@inject()
export default class CreateCustomerService {
  constructor(
    private customerRepository: CustomerRepository,
    private phoneRepository: PhoneRepository,
    private addressRepository: AddressRepository
  ) {}
  async execute({
    email,
    cpf,
    gender,
    full_name,
    phone_number,
    phone_type,
    address,
    city,
    state,
    country,
    zip_code,
  }: IRquest): Promise<CustomerViewModel> {
    const findCustomer = await this.customerRepository.findByCPF(cpf)

    if (findCustomer) {
      throw new Exception('Customer cpf aready exist', { status: 404 })
    }

    const findCustomerByEmail = await this.customerRepository.findByEmail(email)

    if (findCustomerByEmail) {
      throw new Exception('Customer email aready exist', { status: 404 })
    }
    const newCustomer = await this.customerRepository.create({ email, full_name, cpf, gender })

    const newPhone = await this.phoneRepository.create({
      phone_number,
      phone_type,
      customer_id: newCustomer.id,
    })

    const newAddress = await this.addressRepository.create({
      address,
      city,
      state,
      country,
      customer_id: newCustomer.id,
      zip_code,
    })

    return CustomerViewModel.tofullHTTP(newCustomer, newPhone, newAddress)
  }
}
