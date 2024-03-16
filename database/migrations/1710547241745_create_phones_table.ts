import { BaseSchema } from '@adonisjs/lucid/schema'
import { PhoneTypeEnum } from '../../app/contracts/enums.js'

export default class extends BaseSchema {
  protected tableName = 'phones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('phone_number').notNullable()
      table.enu('phone_type', Object.values(PhoneTypeEnum)).nullable()
      table.integer('customer_id').unsigned().references('customers.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
