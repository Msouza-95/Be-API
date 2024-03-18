import Customer from '#models/customer'
import { CreateCustomerDTO } from '../contracts/dto/customer_dto.js'
import ICustomerRepository from '../contracts/repositories/icustomer_repository.js'

class CustomerRepository implements ICustomerRepository {
  async create(data: CreateCustomerDTO): Promise<Customer> {
    const customer = await Customer.create(data)

    return customer
  }
  async findByEmail(email: string): Promise<Customer | null> {
    const findCustomer = await Customer.findBy('email', email)

    return findCustomer
  }
  async findByCPF(cpf: string): Promise<Customer | null> {
    const findCustomer = await Customer.findBy('cpf', cpf)

    return findCustomer
  }
  async findById(id: number): Promise<Customer | null> {
    const findCustomer = await Customer.findBy('id', id)

    await findCustomer?.load('phones')
    await findCustomer?.load('addresses')
    await findCustomer?.load('sales')
    return findCustomer
  }
  async save(customer: Customer): Promise<Customer> {
    await customer.save()

    return customer
  }

  async delete(id: number): Promise<void> {
    const customer = await Customer.find(id)

    await customer?.delete()
    return
  }

  async findAll(): Promise<Customer[]> {
    const customers = await Customer.all()
    return customers
  }
}

export default CustomerRepository
