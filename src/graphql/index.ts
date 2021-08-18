import { gql } from 'apollo-server'
import { getConnection } from 'typeorm'
import { User } from '../entity/User'

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    posts: [Post!]!
  }

  type Post {
    id: Int!
    title: String!
    user: User!
    comments: [Comment!]!
  }

  type Comment {
    id: Int!
    title: String!
    post: Post!
  }

  type Query {
    users: [User!]!
  }
`

export const resolvers = {
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
