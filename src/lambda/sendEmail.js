// Gatsby settings for the environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}
const successCode = 200
const errorCode = 400

// Connect to our Mailgun API
const mailgun = require("mailgun-js")
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
})

// Our Netlify function
export function handler(event, context, callback) {
  let data = JSON.parse(event.body)
  let { name, email, message, product, productUrl } = data

  if (product != null) {
    let mailOptions = {
      from: `БиоВиталис: ${name} <${email}>`,
      to: process.env.MY_EMAIL_ADDRESS,
      replyTo: email,
      subject: `Запитване относно: ${product}`,
      text: `${name} изпраща запитване относно продукт: "${product}" \n Адрес на продукта: ${productUrl} \n Съобщение: \n ${message}`,
    }
  } else {
    let mailOptions = {
      from: `БиоВиталис: ${name} <${email}>`,
      to: process.env.MY_EMAIL_ADDRESS,
      replyTo: email,
      subject: `Изпратено съобщение от ${name} чрез формата за контакти`,
      text: `Съобщение: \n ${message}`,
    }
  }

  // Our MailGun code
  mg.messages().send(mailOptions, function (error, body) {
    if (error) {
      callback(null, {
        errorCode,
        headers,
        body: JSON.stringify(error),
      })
    } else {
      callback(null, {
        successCode,
        headers,
        body: JSON.stringify(body),
      })
    }
  })
}
