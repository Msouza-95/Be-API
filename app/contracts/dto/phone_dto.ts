import { PhoneTypeEnum } from '../enum/enums.js'

export interface CreatePhoneDTO {
  phone_number: string
  phone_type: PhoneTypeEnum
  customer_id: number
}
