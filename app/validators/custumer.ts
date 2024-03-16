import vine from '@vinejs/vine'
import { GenderEnum } from '../contracts/enum/enums.js'

export const createCustomerValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    email: vine.string().trim().email(),
    gender: vine.enum(GenderEnum),
    cpf: vine.string().trim().minLength(11).maxLength(15),
  })
)
