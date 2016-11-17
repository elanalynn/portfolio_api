require('dotenv').config()

const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
})

router.post('/', (req, res) => {
  console.log(process.env.USERNAME, process.env.PASSWORD)
  const mailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to: 'ekopelevich@gmail.com',
    subject: 'MESSAGE FROM elanalynn.com',
    text: `${req.body.note}`,
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error) console.log(error)
    else console.log(`Message sent: ${info.response}`)
  })

  res.end()

})

module.exports = router
