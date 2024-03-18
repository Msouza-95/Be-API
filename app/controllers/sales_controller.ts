/* eslint-disable @typescript-eslint/naming-convention */
import CreateSaleService from '#services/sale/create_sale_service'
import { createSaleValidator } from '#validators/sale'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { SalesViewModel } from '../view-models/sale_view_model.js'

@inject()
export default class SalesController {
  constructor(protected createSaleService: CreateSaleService) {}

  async store({ request, response }: HttpContext) {
    const data = request.body()

    await createSaleValidator.validate(data)

    const { customer_id, product_id, quantity, unit_price } = data

    const newSale = await this.createSaleService.execute({
      customer_id,
      product_id,
      quantity,
      unit_price,
    })

    response.status(201).json({ sale: SalesViewModel.toHTTP(newSale) })
  }
}
