import { getConnection } from 'typeorm'
import { User } from '../entity/User'
import { Resolvers } from './generated/graphql'

// Resolver Map
export const resolvers: Resolvers = {
  Query: {
    user: async (_, params) => {
      return await user(params)
    },
    users: async () => {
      return await users()
    },
  },

  Mutation: {
    createUser: async (_, params) => {
      return await createUser(params)
    },
  },
}

const users = async (): Promise<User[]> => {
  const userRepository = getConnection().getRepository(User)
  return await userRepository.find({ relations: ['posts', 'posts.comments'] })
}

const user = async (params: { id: number }): Promise<User | null> => {
  const userRepository = getConnection().getRepository(User)
  return (await userRepository.findOne({ where: { id: params.id } })) || null
}

const createUser = async (params: { name: string }): Promise<boolean> => {
  const userRepository = getConnection().getRepository(User)
  const user = new User()
  user.name = params.name

  try {
    userRepository.save(user)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
