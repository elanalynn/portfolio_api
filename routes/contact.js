const express = require('express')
const router = express.Router()

const helper = require('sendgrid').mail
const from_email = new helper.Email('elanalynnnnn@gmail.com')
const to_email = new helper.Email('elanalynnnnn@gmail.com')
const subject = 'Hello World from the SendGrid Node.js Library!'
const content = new helper.Content('text/plain', 'Hello, Email!')
const mail = new helper.Mail(from_email, subject, to_email, content)

const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
})

sg.API(request, (error, res) => {
  console.log(res.statusCode)
  console.log(res.body)
  console.log(res.headers)
})

router.get('/', (req, res) => {
  res.send('contact')
})

module.exports = router
