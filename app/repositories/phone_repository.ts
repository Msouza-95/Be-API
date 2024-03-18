import Phone from '#models/phone'
import { CreatePhoneDTO } from '../contracts/dto/phone_dto.js'
import IPhoneRepository from '../contracts/repositories/iphone_repository.js'

class PhoneRepository implements IPhoneRepository {
  async create(data: CreatePhoneDTO): Promise<Phone> {
    const phone = await Phone.create(data)

    return phone
  }

  async findById(id: number): Promise<Phone | null> {
    const findPhone = await Phone.findBy('id', id)

    return findPhone
  }

  async save(phone: Phone): Promise<Phone> {
    await phone.save()

    return phone
  }
  async delete(id: number): Promise<void> {
    const phone = await Phone.find(id)

    await phone?.delete()
  }

  async findByCustomerId(customer_id: number): Promise<Phone | null> {
    const findPhone = await Phone.findBy('customer_id', customer_id)

    return findPhone
  }
}

export default PhoneRepository
