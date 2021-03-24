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

const emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export default class Contact extends React.Component {
  state = {
    product: this.props.product,
    formDirty: false,
    name: "",
    nameError: false,
    phone: "",
    phoneError: false,
    email: "",
    emailError: false,
    message: "",
    messageError: false,
    errorOpen: false,
    successOpen: false,
    openHelperText: false,
  }

  //* Change and validation
  onChange = event => {
    const name = event.target.name
    const value = event.target.value
    const statesToUpdate = {}
    statesToUpdate[name] = value
    this.setState(statesToUpdate, () => {
      switch (name) {
        //* Валидация на полето "Име"
        case "name": {
          if (this.state.name.length > 0) {
            this.setState({ nameError: false })
          }
          break
        }

        //* Валидация на полето "Телефон"
        case "phone": {
          if (
            this.state.phone.length > 0 &&
            (this.state.phone.length < 10 || this.state.phone.length > 15)
          ) {
            this.setState({ phoneError: true })
          } else {
            this.setState({ phoneError: false })
          }
          break
        }

        //* Валидация на полето "Имейл"
        case "email": {
          if (
            this.state.email.length > 0 &&
            !emailRegEx.test(this.state.email)
          ) {
            this.setState({ emailError: true })
          } else {
            this.setState({ emailError: false })
          }
          break
        }

        //* Валидация на полето "Съобщение"
        case "message": {
          if (this.state.message.length > 0) {
            this.setState({ messageError: false })
          }
          break
        }
        default: {
        }
      }
    })
  }

  //* Handles submit
  handleSubmit = async e => {
    // Prevents default behaviour
    e.preventDefault()

    let { name, phone, email, message, product } = this.state
    let data = { name, phone, email, message, product }

    //* Last check before sending
    if (
      !name ||
      !email ||
      !message ||
      this.state.nameError ||
      this.state.phoneError ||
      this.state.emailError
    ) {
      // Turns on HelperText
      this.setState({ helperText: true })

      // Turns error state on fields that are empty
      if (!name) {
        this.setState({ nameError: true })
      }
      if (!email) {
        this.setState({ emailError: true })
      }
      if (!message) {
        this.setState({ messageError: true })
      }
      return
    }

    //* Sends email
    try {
      const response = await axios.post(endpoints.contact, JSON.stringify(data))

      if (response.status !== 200) {
        this.handleError()
        return
      }

      this.handleSuccess()
    } catch (e) {
      this.handleError()
    }
  }

  //* Fires if the email is sent successfully
  handleSuccess = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
      nameError: false,
      phoneError: false,
      emailError: false,
      messageError: false,
      successOpen: true,
      helperText: false,
    })
  }

  //* Fires if there's an error
  handleError = msg => {
    this.setState({
      errorOpen: true,
    })
  }

  //* Alerts
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    this.setState({ successOpen: false, errorOpen: false })
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
            {/* Име */}
            <TextField
              name="name"
              id="standard-name"
              label="Вашето име"
              variant="outlined"
              size="medium"
              className="md:mb-3 w-full mb-4"
              required
              value={this.state.name}
              error={this.state.nameError}
              helperText={
                this.state.helperText && this.state.nameError
                  ? "Моля, въведете вашето име."
                  : ""
              }
              onChange={this.onChange}
            />

            {/* Телефон */}
            <TextField
              name="phone"
              id="standard-phone"
              label="Телефон за обратна връзка"
              variant="outlined"
              size="medium"
              className="md:w-1/2 md:pr-1 md:mb-3 w-full mb-4"
              value={this.state.phone}
              error={this.state.phoneError}
              helperText={
                this.state.helperText && this.state.phoneError
                  ? "Въведеният телефонен номер е грешен."
                  : ""
              }
              onChange={this.onChange}
            />

            {/* Имейл */}
            <TextField
              name="email"
              id="standard-email"
              label="Вашият И-мейл"
              variant="outlined"
              size="medium"
              className="md:w-1/2 md:pl-1 md:mb-3 w-full mb-4"
              required
              value={this.state.email}
              error={this.state.emailError}
              helperText={
                this.state.helperText && this.state.emailError
                  ? "Моля, въведете правилен имейл."
                  : ""
              }
              onChange={this.onChange}
            />

            {/* Съобщение */}
            <TextField
              name="message"
              id="standard-message"
              label="Съобщение"
              variant="outlined"
              rows="4"
              size="medium"
              className="w-full"
              required
              multiline
              value={this.state.message}
              error={this.state.messageError}
              helperText={
                this.state.helperText && this.state.messageError
                  ? "Моля, въведете съобщение."
                  : ""
              }
              onChange={this.onChange}
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
