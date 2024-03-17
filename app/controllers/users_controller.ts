import CreateUserService from '#services/user/create_user_service'
import { createUserValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(protected createUserService: CreateUserService) {}

  async store({ request, response }: HttpContext) {
    const data = request.body()

    await createUserValidator.validate(data)

    const { email, password, name } = data

    const res = await this.createUserService.execute({ email, password, full_name: name })

    response.status(201).json(res)
  }
}
