const sgMail = require("@sendgrid/mail")

require("dotenv").config({
  path: `.env`,
})

//* Netlify function
exports.handler = async (event, context, callback) => {
  let data = JSON.parse(event.body)
  let { name, email, phone, message, product } = data
  let msg = null
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  //* Email details
  msg = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: `БиоВиталис: ${name} <${process.env.SENDGRID_TO_EMAIL}>`,
    replyTo: email,
    subject: product
      ? `Запитване относно: ${product}`
      : `Получено съобщение от формата за контакти`,
    text: `
      Изпратено от: ${name} \n
      И-мейл: ${email} \n
      Телефон: ${phone} \n
      ${product ? `Запитване относно продукт: "${product}"` : ``} \n
      Съобщение: \n
      ${message}
      `,
  }

  //* Sendgrid mail send
  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Message sent",
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    }
  }
}
