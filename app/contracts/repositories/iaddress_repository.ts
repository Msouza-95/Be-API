/* eslint-disable @typescript-eslint/naming-convention */

import Address from '#models/address'
import { CreateAddressDTO } from '../dto/address_dto.js'

export default interface IAddressRepository {
  create(data: CreateAddressDTO): Promise<Address>
  findById(id: number): Promise<Address | null>
  save(address: Address): Promise<Address>
  findByCustomerId(customer_id: number): Promise<Address | null>
}
