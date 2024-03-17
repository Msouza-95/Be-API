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

    const { email, name, cpf, gender } = data

    const res = await this.createCustomerService.execute({
      email,
      cpf,
      gender,
      full_name: name,
    })

    response.status(201).json(res)
  }
  async update({ request, response }: HttpContext) {
    const { id } = request.params()

    const data = request.body()

    await createCustomerValidator.validate(data)

    const { email, name, cpf, gender } = data

    const res = await this.updateCustomerService.execute({
      email,
      cpf,
      gender,
      full_name: name,
      id,
    })

    response.status(200).json(res)
  }

  async destroy({ request, response }: HttpContext) {
    const { id } = request.params()

    await this.deleteCustomerService.execute(id)

    response.status(200).json({ message: 'Customer deletado ' })
  }

  async index({ response }: HttpContext) {
    const customers = await this.indexCustomerService.execute()

    response.status(200).json({ customers: customers.map(CustomerViewModel.toHTTP) })
  }

  async show({ request, response }: HttpContext) {
    const { id } = request.params()
    const customer = await this.showCustomerService.execute(id)

    response.status(200).json({ customer: CustomerViewModel.toHTTP(customer) })
  }
}
