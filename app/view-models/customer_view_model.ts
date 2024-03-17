import Customer from '#models/customer'

export class CustomerViewModel {
  static toBasicHTTP(customer: Customer) {
    return {
      id: customer.id,
      nome: customer.full_name,
      cpf: customer.cpf,
      email: customer.email,
      sexo: customer.gender,
    }
  }

  static tofullHTTP(customer: Customer) {
    return {
      id: customer.id,
      nome: customer.full_name,
      cpf: customer.cpf,
      email: customer.email,
      sexo: customer.gender,
    }
  }
}
