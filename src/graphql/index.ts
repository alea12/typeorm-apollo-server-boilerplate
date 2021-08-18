import { getConnection } from 'typeorm'
import { User } from '../entity/User'
import { Resolvers } from './generated/graphql'

export const resolvers: Resolvers = {
  Query: {
    users: async () => {
      return await users()
    },
  },
}

const users = async () => {
  const userRepository = getConnection().getRepository(User)
  return await userRepository.find({ relations: ['posts', 'posts.comments'] })
}
