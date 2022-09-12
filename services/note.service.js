const noteModel = require('../models/note.model')

module.exports = {
  insert: async (values) => {
    const result = await noteModel.create(values)
    return result
  },
  get: async (user_id) => {
    const result = await noteModel.find(user_id)
    return result
  },
  getSingleByID: async (id) => {
    const result = await noteModel.findById(id)
    return result
  },
  editById: async (id, data) => {
    const result = await noteModel.findByIdAndUpdate(id, data)
    return result
  },
  deleteById: async (id) => {
    const result = await noteModel.findByIdAndDelete(id)
    return result
  }
}
