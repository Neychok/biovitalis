import React from "react"
import { TextField, Button, Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import axios from "axios"

const endpoints = {
  contact: "/.netlify/functions/sendEmail",
}

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
    errorOpen: false,
    successOpen: false,
  }

  //* Changes the state on every key
  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    const statesToUpdate = {}
    statesToUpdate[name] = value

    this.setState(statesToUpdate)
  }

  //* Handles submit
  handleSubmit = e => {
    let { name, phone, email, message, product } = this.state
    let data = { name, phone, email, message, product }

    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      console.log(response)
      if (response.status !== 200 || response.data.statusCode != null) {
        this.handleError()
      } else {
        this.handleSuccess()
      }
    })
    // Prevents default behaviour
    e.preventDefault()
  }

  //* Fires if the email is sent successfully
  handleSuccess = () => {
    console.log("success")
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
      loading: false,
      error: false,
      successOpen: true,
    })
  }

  //* Fires if there's an error
  handleError = msg => {
    console.log("error")
    this.setState({
      loading: false,
      error: true,
      msg,
    })
  }

  //* Alerts
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    this.setState({ alertOpen: false })
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
              variant="outlined"
              size="medium"
              className="w-full mb-3"
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
              variant="outlined"
              size="medium"
              className="md:w-1/2 w-full pr-1 mb-3"
              // error
              // helperText="Моля попълнете полето."
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <TextField
              name="email"
              id="standard-email"
              label="Вашият И-мейл"
              variant="outlined"
              size="medium"
              className="md:w-1/2 w-full pl-1 mb-3"
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
              variant="outlined"
              rows="4"
              size="medium"
              // error
              // helperText="Моля попълнете полето."
              className="w-full"
              required
              multiline
              value={this.state.message}
              onChange={this.handleChange}
            />
            <span className="text-sm">
              Полетата маркирани с * са задължителни
            </span>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="xl:text-base md:w-1/4 block w-full px-6 py-2 mt-3 ml-auto mr-0 text-white"
            >
              Изпрати
            </Button>
          </form>
          <Snackbar
            open={this.state.successOpen}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <Alert
              onClose={this.handleClose}
              variant="filled"
              severity="success"
            >
              Вашето съобщение е изпратено успешно!
            </Alert>
          </Snackbar>
          <Snackbar
            open={this.state.errorOpen}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} variant="filled" severity="error">
              Възникна проблем при изпращането, опитайте отново!
            </Alert>
          </Snackbar>
        </ThemeProvider>
      </>
    )
  }
}
