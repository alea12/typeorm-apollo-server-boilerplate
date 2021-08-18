# Boilerplate for TypeORM + Apollo Server BFF

## Stack

| Name                   | Usage                        |
| ---------------------- | ---------------------------- |
| MySQL                  | Database                     |
| TypeORM                | ORM                          |
| Apollo Server          | GraphQL Server               |
| Express                | HTTP Server                  |
| ts-node-dev            | TypeScript Executor          |
| GraphQL Code Generator | GraphQL => TS Type Generater |

## Requirements

### Software

| Software | Tested Version | Link                                                                                                                                                                         |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js  | `16.5.0`       | - [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)                                                                                  |
| Yarn     | `1.22.11`      | - [Installation](https://yarnpkg.com/getting-started/install)                                                                                                                |
| Docker   | `20.10.7`      | - [Install Docker Desktop on Mac](https://docs.docker.com/desktop/mac/install/) <br> - [Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/) |

### Ports

These ports must be vacant and accessible from the docker host machine:

| Port #  | Usage                         |
| ------- | ----------------------------- |
| `13000` | API Endpoint (Express Server) |
| `13306` | MySQL                         |

## Developing

### Launching dev server

From your host machine:

```
yarn install
docker-compose up
```

...and access [http://localhost:13000/graphql](http://localhost:13000/graphql) from your host machine.

### Database Migration

From your host machine (docker process must be **up** before operation):

```
yarn migration:generate -n MIGRATION_NAME_HERE
yarn migration:run
```

### Adding Dependencies

From your host machine (docker process must be **shut down** before operation):

```
yarn add express
yarn add -D @types/express
```

## Access to DB

From your host machine (docker process must be **up** before operation):

```
mysql -h127.0.0.1 -P13306 -u'typeorm-apollo-server' -p'typeorm-apollo-server' typeorm-apollo-server
```

In [connection URL syntax](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html):

```
mysql://typeorm-apollo-server:typeorm-apollo-server@127.0.0.1:13306/typeorm-apollo-server
```
