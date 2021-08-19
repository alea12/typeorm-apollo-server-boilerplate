import { gql } from 'apollo-server'

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
    user(id: Int!): User
  }

  type Mutation {
    createUser(name: String!): Boolean!
  }
`
