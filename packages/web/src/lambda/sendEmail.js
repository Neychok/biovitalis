import mailgun from "mailgun-js"

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}
const successCode = 200
const errorCode = 400

// Connect to our Mailgun API
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
})

// Our Netlify function
export function handler(event, context, callback) {
  let data = JSON.parse(event.body)
  let { name, email, phone, message, product, productUrl } = data
  let mailOptions = null

  if (product != null) {
    mailOptions = {
      from: `БиоВиталис: ${name} <${email}>`,
      to: process.env.MY_EMAIL_ADDRESS,
      replyTo: email,
      subject: `Запитване относно: ${product}`,
      text: `
      Изпратено от: ${name} \n
      И-мейл: ${email} \n
      Телефон: ${phone} \n
      Запитване относно продукт: "${product}" \n
      Адрес на продукта: ${productUrl} \n
      Съобщение: \n
      ${message}
      `,
    }
  } else {
    mailOptions = {
      from: `БиоВиталис: ${name} <${email}>`,
      to: process.env.MY_EMAIL_ADDRESS,
      replyTo: email,
      subject: `Изпратено съобщение от ${name} чрез формата за контакти`,
      text: `
      Изпратено от: ${name} \n
      И-мейл: ${email} \n
      Телефон: ${phone} \n
      Съобщение: \n${message}`,
    }
  }

  // Our MailGun code
  mg.messages().send(mailOptions, function (error, body) {
    console.log(error)
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
