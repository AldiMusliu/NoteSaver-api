const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true },

    content: {
      type: String, 
      required: true 
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const note = mongoose.model('Notes', noteSchema)
module.exports = note