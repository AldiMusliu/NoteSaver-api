const express = require('express')
const router = express.Router()
const noteController = require('../controllers/note.controller')
const { jsonResponse } = require('../lib/helper')
const { verifyToken } = require('../middleware/auth.middleware')

router.get('/all', verifyToken, async (req, res) => {
  const usertoken = req.headers.authorization;
  var decoded = JSON.parse(Buffer.from(usertoken.split('.')[1], 'base64').toString());
  try{
    const result = await noteController.getNotes({user_id: decoded._id})
    res.json(jsonResponse(result))
  }
  catch(err){
    res.json(jsonResponse(err.message, false))
  }
})

router.get('/:id', verifyToken, async (req, res) => {
  try{
    const result = await noteController.getNote(req.params.id)
    res.json(jsonResponse(result))
  }
  catch(err){
    res.json(jsonResponse(err.message, false))
  }
})

router.post('/:id', verifyToken, async (req, res) => {  
  try{
    const result = await noteController.editNote(req.params.id, req.body)
    res.json(jsonResponse(result))
  }
  catch(err){
    res.json(jsonResponse(err.message, false))
  }

})

router.post('/', verifyToken, async (req, res) => {
  try {
    const result = await noteController.addNote(req.body)
    res.json(jsonResponse(result))
  } catch (err) {
    res.json(jsonResponse(err.message, false))
  }
})

router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const result = await noteController.deleteNote(req.params.id)
    res.json(jsonResponse(result))
  } catch (err) {
    res.json(jsonResponse(err.message, false))
  }
})



module.exports = router
