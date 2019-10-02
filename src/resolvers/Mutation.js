import uuidv4 from 'uuid/v4'

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some(user => user.email === args.email)
    if (emailTaken) {
      throw new Error('Email Taken')
    } else {
      const newUser = {
        ...args,
        id: uuidv4()
      }
      db.users.push(newUser)
      return newUser
    }
  },
  createPost(parent, args, { db }, info) {
    const userExists = db.users.some(user => user.id === args.data.author)
    if (!userExists) {
      throw new Error("User doesn't exist!")
    } else {
      const newPost = {
        id: uuidv4(),
        ...args.data
      }
      db.posts.push(newPost)
      return newPost
    }
  }
}

export { Mutation as default }
