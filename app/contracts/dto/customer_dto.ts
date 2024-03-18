import { GenderEnum, PhoneTypeEnum } from '../enum/enums.js'

export interface CreateCustomerDTO {
  full_name: string
  email: string
  cpf: string
  gender: GenderEnum
}

export interface UpdateCustomerDTO {
  id: number
  full_name: string
  email: string
  cpf: string
  gender: GenderEnum
  phone_type: PhoneTypeEnum
  address: string
  city: string
  state: string
  country: string
  zip_code: string
  phone_number: string
}
