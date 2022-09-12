const usersModel = require('../models/users.model')

module.exports = {
  insert: async (values) => {
    const result = await usersModel.create(values)
    return result
  },
  findByEmail: async (email) => {
    const result = await usersModel.findOne({ email }).exec()
    return result
  },
  updatePassword: async (_id, password) => {
    const result = await usersModel.findByIdAndUpdate(_id, { password }).exec()
    return result
  },
  verifyAccount: async (_id) => {
    const result = await usersModel.findByIdAndUpdate(_id, { verified: true }).exec()
    return result
  }
}
