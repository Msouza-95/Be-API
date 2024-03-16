import { GenderEnum } from '../enum/enums.js'

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
}
