import Address from '#models/address'
import Customer from '#models/customer'
import Phone from '#models/phone'

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

  static tofullHTTP(customer: Customer, phone: Phone, aaddress: Address) {
    return {
      id: customer.id,
      nome: customer.full_name,
      cpf: customer.cpf,
      email: customer.email,
      sexo: customer.gender,
      phone_number: phone.phone_number,
      phone_type: phone.phone_type,
      address: aaddress.address,
      city: aaddress.city,
      state: aaddress.state,
      country: aaddress.country,
      zip_code: aaddress.zip_code,
    }
  }
}
