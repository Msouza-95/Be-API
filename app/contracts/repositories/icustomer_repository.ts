/* eslint-disable @typescript-eslint/naming-convention */
import Customer from '#models/customer'
import { CreateCustomerDTO } from '../dto/customer_dto.js'

export default interface ICustomerRepository {
  create(data: CreateCustomerDTO): Promise<Customer>
  findByEmail(email: string): Promise<Customer | null>
  findByCPF(cpf: string): Promise<Customer | null>
  findById(id: number): Promise<Customer | null>
  save(customer: Customer): Promise<Customer>
  delete(id: number): Promise<void>
  findAll(): Promise<Customer[]>
}
