const userService = require('../services/user.service')
const bcrypt = require('bcrypt')

const emailService = require('../services/email.service')
const jwt = require('jsonwebtoken')
const constants = require('../lib/constants')

module.exports = {
  add: async (params) => {
    const { password, firstName, lastName, email } = params

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT))

    const result = await userService.insert({
      password: hashedPassword,
      firstName,
      lastName,
      email,
    })
    const token = jwt.sign({ _id: result._id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12 }, process.env.JWT_VERIFY_SECRET)
    emailService.sendRegistrationEmail(email, token)
    return result._id
  },

  changePassword: async (password, id) => {
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT))
    const result = await userService.updatePassword(id, hashedPassword)
    return result._id
  },
  verifyAccount: async (id) => {
    const result = await userService.verifyAccount(id)
    return result._id
  },

}
