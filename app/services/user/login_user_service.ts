/* eslint-disable @typescript-eslint/naming-convention */
import { inject } from '@adonisjs/core'

import { Exception } from '@adonisjs/core/exceptions'
import UserRepository from '../../repositories/user_repository.js'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'

interface IRequest {
  email: string
  password: string
}

@inject()
export default class LoginUserService {
  constructor(private IUserRepository: UserRepository) {}
  async execute({ email, password }: IRequest): Promise<any> {
    const user = await this.IUserRepository.findByEmail(email)

    if (!user) {
      throw new Exception('Invalid credentials', { status: 401 })
    }

    await hash.verify(user.password, password)
    const res = await hash.verify(user.password, password)

    if (res) {
      const token = await User.accessTokens.create(user)

      return {
        type: 'bearer',
        value: token.value!.release(),
      }
    }
  }
}
