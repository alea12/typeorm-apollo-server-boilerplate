# Boilerplate for TypeORM + Apollo Server BFF

## Developing

### Requirements

| Name    | Tested Version | Link                                                                                                                                                                         |
| ------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js | `16.5.0`       | - [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)                                                                                  |
| Yarn    | `1.22.11`      | - [Installation](https://yarnpkg.com/getting-started/install)                                                                                                                |
| Docker  | `20.10.7`      | - [Install Docker Desktop on Mac](https://docs.docker.com/desktop/mac/install/) <br> - [Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/) |

### Ports

These ports must be vacant and accessible from the docker host machine:

| Port # | Usage                         |
| ------ | ----------------------------- |
| 13000  | API Endpoint (Express Server) |
| 13306  | MySQL                         |

### Launching dev server

From your host machine:

```
yarn install
docker-compose up
```

### Migration

From your host machine (docker process must be **up** before operation):

```
yarn migration:generate -n MIGRATION_NAME_HERE
yarn migration:run
```

### Adding dependencies

From your host machine (docker process must be **shut down** before operation):

```
yarn add express
yarn add -D @types/express
```

## Access to the DB

From your host machine (docker process must be **up** before operation):

```
mysql -h127.0.0.1 -P13306 -u'typeorm-apollo-server' -p'typeorm-apollo-server' typeorm-apollo-server
```

In [connection URL syntax](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html):

```
mysql://typeorm-apollo-server:typeorm-apollo-server@127.0.0.1:13306/typeorm-apollo-server
```
