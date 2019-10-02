const Comments = {
  post(parent, args, { db }, info) {
    return db.posts.find(post => parent.post === post.id)
  }
}

export { Comments as default }
