import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { PhoneTypeEnum } from '../contracts/enums.js'
import Customer from './customer.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Phone extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare phone_number: string

  @column()
  declare phone_type: PhoneTypeEnum

  @hasMany(() => Customer)
  declare phones: relations.HasMany<typeof Customer>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
