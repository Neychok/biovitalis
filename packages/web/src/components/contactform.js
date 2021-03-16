import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const endpoints = {
  contact: "/.netlify/functions/sendEmail",
}
const axios = require("axios")

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3ebd93",
    },
    secondary: {
      main: "#627D98",
      white: "#ffffff",
    },
    background: {
      main: "#ffffff",
    },
  },
})

export default class Contact extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",
    product: this.props.product,
    productUrl: this.props.productUrl,
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    const statesToUpdate = {}
    statesToUpdate[name] = value

    this.setState(statesToUpdate)
  }

  handleSubmit = e => {
    let { name, phone, email, message, product, productUrl } = this.state
    let data = { name, phone, email, message, product, productUrl }
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        this.handleError()
      } else {
        this.handleSuccess()
      }
    })
    e.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
      loading: false,
      error: false,
    })
  }

  handleError = msg => {
    this.setState({
      loading: false,
      error: true,
      msg,
    })
  }

  render() {
    return (
      <>
        <div className="xl:text-2xl xl:py-6 md:py-4 md:text-xl text-primary-black px-3 py-2 text-lg text-center">
          {this.props.message}
        </div>
        <ThemeProvider theme={theme}>
          <form
            noValidate
            autoComplete="off"
            className="flex-col px-2"
            onSubmit={this.handleSubmit}
          >
            <TextField
              name="name"
              id="standard-name"
              label="Вашето име"
              variant="filled"
              size="small"
              className="w-full mt-2"
              // error
              // helperText="Моля попълнете полето."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
            <TextField
              name="phone"
              id="standard-phone"
              label="Телефон за обратна връзка"
              variant="filled"
              size="small"
              className="w-full mt-2"
              // error
              // helperText="Моля попълнете полето."
              required
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <TextField
              name="email"
              id="standard-email"
              label="Вашият И-мейл"
              variant="filled"
              size="small"
              className="w-full mt-2"
              // error
              // helperText="Моля попълнете полето."
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              name="message"
              id="standard-message"
              label="Съобщение"
              variant="filled"
              className="w-full mt-2"
              // error
              // helperText="Моля попълнете полето."
              required
              multiline
              value={this.state.message}
              onChange={this.handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="xl:text-base block px-6 py-2 mt-3 ml-auto mr-0 text-white"
            >
              Изпрати
            </Button>
          </form>
        </ThemeProvider>
      </>
    )
  }
}
