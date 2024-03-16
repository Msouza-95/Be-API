import User from '#models/user'
import { inject } from '@adonisjs/core'

import CreateUserDTO from '../contracts/dto/user_dto.js'
import UserRepository from '../repositories/user_repository.js'
import { Exception } from '@adonisjs/core/exceptions'

@inject()
export default class CreateUserService {
  constructor(private IUserRepository: UserRepository) {}
  async execute({ email, full_name, password }: CreateUserDTO): Promise<User> {
    const findUser = await this.IUserRepository.findByEmail(email)

    if (findUser) {
      throw new Exception('User email aready exist', { status: 404 })
    }
    const user = await this.IUserRepository.create({ email, full_name, password })

    return user
  }
}
