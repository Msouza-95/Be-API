/* eslint-disable @typescript-eslint/naming-convention */

import Sale from '#models/sale'
import { CreateSaleDTO } from '../dto/sale_dtos.js'

export default interface ISaleRepository {
  create(data: CreateSaleDTO): Promise<Sale>
  findById(id: number): Promise<Sale | null>
  save(sale: Sale): Promise<Sale>
}
