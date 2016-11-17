const express = require('express')
const router = express.Router()
const messages = require('./messages')

router.use('/messages', messages)

router.get('/', function(req, res) {
  res.send('This is the index! How exciting.')
})

module.exports = router
