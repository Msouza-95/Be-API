/* eslint-disable @typescript-eslint/naming-convention */
import { createCustomerValidator } from '#validators/custumer'
import { inject } from '@adonisjs/core'

import type { HttpContext } from '@adonisjs/core/http'

import { CustomerViewModel } from '../view-models/customer_view_model.js'
import CreateCustomerService from '#services/customer/create_customer_service'
import UpdateCustomerService from '#services/customer/update_customer_service'
import DeleteCustomerService from '#services/customer/delete_customer_service '
import IndexCustomerService from '#services/customer/index_customer_service'
import ShowCustomerService from '#services/customer/show_customer_service'

@inject()
export default class CustomersController {
  constructor(
    protected createCustomerService: CreateCustomerService,
    protected updateCustomerService: UpdateCustomerService,
    protected deleteCustomerService: DeleteCustomerService,
    protected indexCustomerService: IndexCustomerService,
    protected showCustomerService: ShowCustomerService
  ) {}

  async store({ request, response }: HttpContext) {
    const data = request.body()

    await createCustomerValidator.validate(data)

    const {
      email,
      name,
      cpf,
      gender,
      phone_number,
      phone_type,
      address,
      city,
      state,
      country,
      zip_code,
    } = data

    const newCustomer = await this.createCustomerService.execute({
      email,
      cpf,
      gender,
      full_name: name,
      phone_number,
      phone_type,
      address,
      city,
      state,
      country,
      zip_code,
    })

    response.status(201).json(newCustomer)
  }
  async update({ request, response }: HttpContext) {
    const { id } = request.params()

    const data = request.body()

    await createCustomerValidator.validate(data)

    const {
      email,
      name,
      cpf,
      gender,
      phone_number,
      phone_type,
      address,
      city,
      state,
      country,
      zip_code,
    } = data

    const customer = await this.updateCustomerService.execute({
      email,
      cpf,
      gender,
      full_name: name,
      id,
      phone_number,
      phone_type,
      address,
      city,
      state,
      country,
      zip_code,
    })

    response.status(200).json({ customer: customer })
  }

  async destroy({ request, response }: HttpContext) {
    const { id } = request.params()

    await this.deleteCustomerService.execute(id)

    response.status(200).json({ message: 'Customer deletado ' })
  }

  async index({ response }: HttpContext) {
    const customers = await this.indexCustomerService.execute()

    response.status(200).json({ customers: customers.map(CustomerViewModel.toBasicHTTP) })
  }

  async show({ request, response }: HttpContext) {
    const { id } = request.params()
    const { month, year } = request.qs()

    const customer = await this.showCustomerService.execute({ customer_id: id, month, year })

    response.status(200).json({ customer: customer })
  }
}
