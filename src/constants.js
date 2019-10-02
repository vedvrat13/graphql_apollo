const users = [
  {
    id: '101',
    name: 'Test101',
    email: 'test@test.com',
    city: 'Sydney'
  },
  {
    id: '201',
    name: 'Test201',
    email: 'test@test1.com',
    city: 'Perth'
  },
  {
    id: '301',
    name: 'Test301',
    email: 'test@test2.com',
    city: 'Melbourne'
  }
]

const posts = [
  {
    id: 'p101',
    name: 'pTest101',
    description: 'pSydney',
    author: '101'
  },
  {
    id: 'p201',
    name: 'pTest201',
    description: 'pPerth',
    author: '101'
  },
  {
    id: 'p301',
    name: 'pTest301',
    description: 'pMelbourne',
    author: '301'
  }
]

const comments = [
  {
    id: 'c101',
    content: 'Test 101',
    post: 'p101'
  },
  {
    id: 'c201',
    content: 'Test 201',
    post: 'p201'
  },
  {
    id: 'c301',
    content: 'Test 301',
    post: 'p301'
  }
]

const db = {
  users,
  posts,
  comments
}

export { db as default }
