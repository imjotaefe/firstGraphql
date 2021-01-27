const users = [
  {id: 1, name: 'João', email: 'joao@teste.com'},
  {id: 2, name: 'Teste', email: 'teste@teste.com'},
]

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },

  Mutation: {
    createUser: () => users[0],
  }
}