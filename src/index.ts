import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import { resolvers } from './graphql/index'
import { typeDefs } from './graphql/typeDefs'
import { ApolloServer } from 'apollo-server-express'

const app = async () => {
  await createConnection()

  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  const app = express()
  server.applyMiddleware({ app })

  app.listen({ port: 3000 })
  console.log(`🚀 Server ready: http://localhost:3000${server.graphqlPath}`)
  console.log(`🐳 From docker: http://localhost:13000${server.graphqlPath}`)
}

app()
