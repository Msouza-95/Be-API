import { BaseSchema } from '@adonisjs/lucid/schema'
import { StatusEnum } from '../../app/contracts/enums.js'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 80)
      table.string('description', 250)
      table.string('category', 80)
      table.string('brand', 80)
      table.decimal('price')
      table.integer('stock_quantity')
      table.enu('status', Object.values(StatusEnum)).defaultTo(StatusEnum.ATIVO)

      table.timestamp('created_at')
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
