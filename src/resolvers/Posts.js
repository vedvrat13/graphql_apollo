const Posts = {
  author(parent, args, { db }, info) {
    return db.users.find(user => user.id === parent.author)
  }
}

export { Posts as default }
