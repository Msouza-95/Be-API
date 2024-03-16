import User from '#models/user'
import CreateUserDTO from '../contracts/dto/user_dto.js'
import IUserRepository from '../contracts/repositories/Iuser_repository.js'

class UserRepository implements IUserRepository {
  async create(data: CreateUserDTO): Promise<User> {
    const user = await User.create(data)

    return user
  }
  async findByEmail(email: string): Promise<User | null> {
    const findUser = await User.findBy('email', email)

    return findUser
  }
}

export default UserRepository
