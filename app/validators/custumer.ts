import vine from '@vinejs/vine'
import { GenderEnum, PhoneTypeEnum } from '../contracts/enum/enums.js'

export const createCustomerValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    email: vine.string().trim().email(),
    gender: vine.enum(GenderEnum),
    cpf: vine.string().trim().minLength(11).maxLength(15),
    phone_number: vine.string().trim().minLength(11),
    phone_type: vine.enum(PhoneTypeEnum),
    address: vine.string().trim(),
    city: vine.string().trim(),
    state: vine.string().trim(),
    country: vine.string().trim(),
    zip_code: vine.string().trim(),
  })
)
