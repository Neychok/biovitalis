import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

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

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="h-96 flex flex-col items-center justify-center px-4">
      <h2 className="mb-4 text-6xl">404</h2>
      <p className="mb-12 text-xl">Страницата не беше намерена</p>
      <ThemeProvider theme={theme}>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            className="py-2 text-base font-semibold text-white"
          >
            Върни се към началната страница
          </Button>
        </Link>
      </ThemeProvider>
    </section>
  </Layout>
)

export default NotFoundPage
