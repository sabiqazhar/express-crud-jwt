const router = require('express').Router()
const bodyParser = require('body-parser')
const verifyToken = require('../controllers/verifyToken')

const {getAll, getById, postData, putData, deleteData} = require('../controllers/todo')


const jsonParser = bodyParser.json()

router.get('/api/todo', verifyToken, getAll)
router.get('/api/todo/:id', getById)

router.post('/api/todo', jsonParser, postData)
router.put('/api/todo/:id', jsonParser, putData)
router.delete('/api/todo/:id', jsonParser, deleteData)

module.exports = router