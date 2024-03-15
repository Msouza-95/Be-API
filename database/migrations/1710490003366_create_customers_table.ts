import { BaseSchema } from '@adonisjs/lucid/schema'
import { GenderEnum } from '../../app/contracts/enums.js'

export default class extends BaseSchema {
  protected tableName = 'customers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('full_name', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('cpf').notNullable()
      table.enu('gender', Object.values(GenderEnum)).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
