import Address from '#models/address'
import { CreateAddressDTO } from '../contracts/dto/address_dto.js'
import IAddressRepository from '../contracts/repositories/iaddress_repository.js'

class AddressRepository implements IAddressRepository {
  async create(data: CreateAddressDTO): Promise<Address> {
    const address = await Address.create(data)

    return address
  }

  async findById(id: number): Promise<Address | null> {
    const findAddress = await Address.findBy('id', id)

    return findAddress
  }
  async save(address: Address): Promise<Address> {
    await address.save()

    return address
  }

  async findByCustomerId(customer_id: number): Promise<Address | null> {
    const findAddress = await Address.findBy('customer_id', customer_id)

    return findAddress
  }
}

export default AddressRepository
