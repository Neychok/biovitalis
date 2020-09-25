import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

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
    email: "",
    message: "",
    product: "",
    productUrl: "",
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
        <Paper className="pb-4 mx-2 mb-4">
          <div className="p-4 text-xl">{this.props.message}</div>

          <ThemeProvider theme={theme}>
            {(this.state.product = this.props.product)}
            {(this.state.productUrl = this.props.productUrl)}
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
                className="block px-6 py-2 mt-3 ml-auto mr-0 text-white"
              >
                Изпрати
              </Button>
            </form>
          </ThemeProvider>
        </Paper>
      </>
    )
  }
}
