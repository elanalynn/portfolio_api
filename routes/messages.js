if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const options = {
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD,
  },
}

const transporter = nodemailer.createTransport(sgTransport(options))

router.get('/', (req, res) => {
  res.send('it works!')
})

router.post('/', (req, res, next) => {
  const mailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to: 'ekopelevich@gmail.com',
    subject: 'Message from elanalynn.com',
    text: `${req.body.note}`,
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error) next(error)
    else res.send(`Message sent: ${info.response}`)
  })
})

module.exports = router
