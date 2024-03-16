import CreateCustomerService from '#services/create_customer_service'
import DeleteCustomerService from '#services/delete_delete_service '
import UpdateCustomerService from '#services/update_customer_service'
import { createCustomerValidator } from '#validators/custumer'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class CustomersController {
  constructor(
    protected createCustomerService: CreateCustomerService,
    protected updateCustomerService: UpdateCustomerService,
    protected deleteCustomerService: DeleteCustomerService
  ) {}

  async store({ request, response }: HttpContext) {
    const data = request.body()

    await createCustomerValidator.validate(data)

    const { email, name, cpf, gender } = data

    const res = await this.createCustomerService.execute({ email, cpf, gender, full_name: name })

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
}
