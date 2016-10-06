const express = require('express')
const router = express.Router()
const nodeMailer = require('nodemailer')

// const helper = require('sendgrid').mail
// const from_email = new helper.Email('elanalynnnnn@gmail.com')
// const to_email = new helper.Email('elanalynnnnn@gmail.com')
// const subject = 'Message from elanalynn.com...'
// const content = new helper.Content('text/plain', 'Hello, Email!')
// const mail = new helper.Mail(from_email, subject, to_email, content)
//
// const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)

router.post('/', (req, res) => {

  const messageBody =
  `<h3>From: ${req.body.name} </h3>
  <h4>Email: ${req.body.email}</h4>
  <p>${req.body.note}</p>`

  const mailOptions = {
    from: 'elanalynnnnn@gmail.com',
    to: 'elanalynnnnn@gmail.com',
    subject: 'Message from elanalynn.com',
    html: messageBody,
  }

  let transporter = nodeMailer.createTransport('smtps://elanalynnnnn%40gmail.com:pass@smtp.gmail.com')

  transporter.sendMail(mailOptions, (err, info) => {
    if(err){
      console.log(err)
      res.json({yo: 'err'})
    }
    console.log('Message sent: ' + info.response)
    res.json({yo: info.response})
  })
})

module.exports = router
