import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'

createConnection().then((_connection) => {
  const app = express()

  app.get('/', (_, res) => {
    res.send('Hello, world!')
  })

  app.listen(3000)

  console.log(`app started at http://localhost:13000 (from docker host)`)
})
