import { GraphQLServer } from 'graphql-yoga'
import db from './constants'

// resolvers
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Posts from './resolvers/Posts'
import Comments from './resolvers/Comments'

const server = new GraphQLServer({
  typeDefs: `./src/schema.graphql`,
  resolvers: {
    Query,
    Mutation,
    Posts,
    Comments
  },
  context: {
    db
  }
})

server.start(() => {
  console.log('Server is running!')
})
