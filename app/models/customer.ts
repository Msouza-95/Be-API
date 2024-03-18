import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { GenderEnum } from '../contracts/enum/enums.js'
import * as relations from '@adonisjs/lucid/types/relations'
import Phone from './phone.js'
import Address from './address.js'
import Sale from './sale.js'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare full_name: string

  @column()
  declare email: string

  @column()
  declare cpf: string

  @column()
  declare gender: GenderEnum

  @hasMany(() => Phone, {
    foreignKey: 'customer_id',
  })
  declare phones: relations.HasMany<typeof Phone>

  @hasMany(() => Address, {
    foreignKey: 'customer_id',
  })
  declare addresses: relations.HasMany<typeof Address>

  @hasMany(() => Sale, {
    foreignKey: 'customer_id',
  })
  declare sales: relations.HasMany<typeof Sale>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
