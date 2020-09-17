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
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    const statesToUpdate = {}
    statesToUpdate[name] = value

    this.setState(statesToUpdate)
  }

  handleSubmit = e => {
    let { name, phone, email, message } = this.state
    let data = { name, phone, email, message }
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
          <div className="p-4 text-xl">Изпрати запитване за този продукт</div>

          <ThemeProvider theme={theme}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={this.handleSubmit}
              className="flex-col px-2"
            >
              <TextField
                id="standard-name"
                label="Вашето име"
                variant="filled"
                color="background"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                required
                className="w-full mt-2"
                size="small"
              />
              <TextField
                id="standard-phone"
                label="Телефон за обратна връзка"
                variant="filled"
                color="background"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                required
                className="w-full mt-2"
                size="small"
              />
              <TextField
                id="standard-email"
                label="Вашият И-мейл"
                variant="filled"
                color="background"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                required
                className="w-full mt-2"
                size="small"
              />
              <TextField
                id="standard-message"
                label="Съобщение"
                variant="filled"
                color="background"
                multiline
                value={this.state.message}
                onChange={this.handleChange}
                name="message"
                required
                className="w-full mt-2"
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
