import { GraphQLServer } from 'graphql-yoga'
import uuidv4 from 'uuid/v4'

// Constants
import { users, posts, comments } from './constants'

// typeDefs
const typeDefs = `
    type Query {
        hello: String!,
        location: String!,
        bio: String,
        users(query: String): [User!]!,
        posts(query: String): [Posts!]!,
        comments(query: String): [Comments!]!
    },
    type Mutation {
      createUser(name: String!, email: String!, city: String!): User!
      createPost(data: CreatePostInput): Posts!
    },
    input CreatePostInput {
      name: String!, 
      description: String, 
      author: String!
    },
    type User {
      id: String!,
      name: String!,
      email: String!,
      city: String!
    },
    type Posts {
      id: String!,
      name: String!,
      description: String,
      author: User!
    },
    type Comments {
      id: String!,
      content: String!,
      post: Posts!
    }

`

// resolvers
const resolvers = {
  Query: {
    hello() {
      return 'Hello Ved'
    },
    location() {
      return 'Saharanpur City'
    },
    bio() {
      return 'Startup Founder'
    },
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users
      } else {
        return users.filter(user =>
          user.name.toLowerCase().includes(args.query.toLowerCase())
        )
      }
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts
      } else {
        return posts.filter(post =>
          post.name.toLowerCase().includes(args.query.toLowerCase())
        )
      }
    },
    comments(parent, args, ctx, info) {
      if (!args.query) {
        return comments
      } else {
        return comments.filter(
          comment.name.toLowerCase().includes(args.query.toLowerCase())
        )
      }
    }
  },
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = users.some(user => user.email === args.email)
      if (emailTaken) {
        throw new Error('Email Taken')
      } else {
        const newUser = {
          ...args,
          id: uuidv4()
        }
        users.push(newUser)
        return newUser
      }
      console.log(args)
    },
    createPost(parent, args, ctx, info) {
      const userExists = users.some(user => user.id === args.data.author)
      if (!userExists) {
        throw new Error("User doesn't exist!")
      } else {
        const newPost = {
          id: uuidv4(),
          ...args.data
        }
        posts.push(newPost)
        return newPost
      }
    }
  },
  Posts: {
    author(parent, args, ctx, info) {
      return users.find(user => user.id === parent.author)
    }
  },
  Comments: {
    post(parent, args, ctx, info) {
      return posts.find(post => parent.post === post.id)
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('Server is running!')
})
