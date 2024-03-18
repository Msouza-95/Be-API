import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Customer from './customer.js'
import Product from './product.js'

export default class Sale extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare quantity: number

  @column()
  declare unit_price: number

  @column()
  declare total_price: number

  @column()
  declare date_time: Date

  @column()
  declare customer_id: number

  @column()
  declare product_id: number

  @hasMany(() => Customer)
  declare customers: relations.HasMany<typeof Customer>

  @hasMany(() => Product)
  declare products: relations.HasMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  constructor() {
    super()

    this.date_time = new Date()
  }
}
