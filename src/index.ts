import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import { typeDefs, resolvers } from './graphql/index'
import { ApolloServer } from 'apollo-server-express'

createConnection().then(async (_connection) => {
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  const app = express()
  server.applyMiddleware({ app })

  app.listen({ port: 3000 })
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
})
