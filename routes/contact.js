const express = require('express')
const router = express.Router()
const nodeMailer = require('nodemailer')

router.post('/', (req, res) => {
  console.log('here')

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

  let transporter = nodeMailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'elanalynnnnn@gmail.com',
            pass: process.env.EMAIL_PASSWORD,
        },
    })

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
