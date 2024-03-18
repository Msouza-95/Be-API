import Sale from '#models/sale'
import { CreateSaleDTO } from '../contracts/dto/sale_dtos.js'
import ISaleRepository from '../contracts/repositories/isale_repository.js'

class SaleRepository implements ISaleRepository {
  async create(data: CreateSaleDTO): Promise<Sale> {
    const sale = await Sale.create(data)

    return sale
  }

  async findById(id: number): Promise<Sale | null> {
    const findAddress = await Sale.findBy('id', id)

    return findAddress
  }
  async save(sale: Sale): Promise<Sale> {
    await sale.save()

    return sale
  }
}

export default SaleRepository
