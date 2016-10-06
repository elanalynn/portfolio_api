const express = require('express')
const router = express.Router()
const contact = require('./contact')

router.use('/contact', contact)

router.get('/', function(req, res) {
  res.send('This is the index. Go to a specific endpoint.')
})

module.exports = router
