/* eslint-disable @typescript-eslint/naming-convention */
import User from '#models/user'
import CreateUserDTO from '../dto/user_dto.js'

export default interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>
  findByEmail(email: string): Promise<User | null>
}
