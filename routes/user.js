const router = require('express').Router()
const bodyParser = require('body-parser')

const {regist, login} = require('../controllers/user')

const jsonParser = bodyParser.json()
router.post('/api/user/register', jsonParser, regist)
router.post('/api/user/login', jsonParser, login)

module.exports = router