/* eslint-disable @typescript-eslint/naming-convention */
import Phone from '#models/phone'
import { CreatePhoneDTO } from '../dto/phone_dto.js'

export default interface IPhoneRepository {
  create(data: CreatePhoneDTO): Promise<Phone>
  findById(id: number): Promise<Phone | null>
  save(customer: Phone): Promise<Phone>
  delete(id: number): Promise<void>
  findByCustomerId(customer_id: number): Promise<Phone | null>
}
