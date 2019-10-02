const Query = {
  hello() {
    return 'Hello Ved'
  },
  location() {
    return 'Saharanpur City'
  },
  bio() {
    return 'Startup Founder'
  },
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users
    } else {
      return db.users.filter(user =>
        user.name.toLowerCase().includes(args.query.toLowerCase())
      )
    }
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts
    } else {
      return db.posts.filter(post =>
        post.name.toLowerCase().includes(args.query.toLowerCase())
      )
    }
  },
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments
    } else {
      return db.comments.filter(
        comment.name.toLowerCase().includes(args.query.toLowerCase())
      )
    }
  }
}

export { Query as default }
