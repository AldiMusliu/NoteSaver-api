const noteService = require('../services/note.service')
module.exports = {
  addNote: async (params) => {
    const result = await noteService.insert(params)
    return result
  },
  getNotes: async (user_id) => {
    const result = await noteService.get(user_id)
    return result
  },
  getNote: async (id) => {
    const result = await noteService.getSingleByID(id)
    return result
  },
  editNote: async (id, data) => {
    const result = await noteService.editById(id, data)
    return result
  },
  deleteNote: async (id) => {
    const result = await noteService.deleteById(id)
    return result
  },
 
}