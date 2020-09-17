import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Paper from "@material-ui/core/Paper"
import Carousel from "../components/carousel"

import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import SwipeableViews from "react-swipeable-views"

import ContactForm from "../components/contactform"

// import ReactPlayer from "react-player/lazy"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div className="p-3">{children}</div>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#27ab83",
      main: "#3ebd93",
      dark: "#102A43",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bcccdc",
      main: "#627D98",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      main: "#fff",
    },
  },
})

const Product = ({ data }) => {
  const document = data.allPrismicProduct.edges[0].node.data

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <>
      <SEO title="Home" />
      {/* Hides footer out of sight and makes product pages look more consistent*/}
      <div className="">
        {/* Wrapper for the Breadcrumbs, back button, Slider, Title */}
        <Breadcrumbs
          aria-label="breadcrumb"
          maxItems={3}
          className="w-full h-5 px-4 list-none"
        >
          <Link to="/продукти/" className="mb-0">
            Продукти
          </Link>
          <Link to={`/продукти/${document.category.uid}/`} className="mb-0">
            {document.category.uid}
          </Link>
          <p className="mb-0">{data.allPrismicProduct.edges[0].node.uid}</p>
        </Breadcrumbs>

        {/* Back Button */}
        <div className="py-1">
          <Link to={`/продукти/${document.category.uid}/`} className="">
            <svg
              className="h-10 pl-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#014D40"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Product Name */}
        <h1 className="px-4 pt-2 pb-3 text-xl">{document.product_name.text}</h1>
        <div className="mx-2">
          <Paper elevation={1} className="container-500 pb-1 mx-auto mb-4">
            <Carousel images={document.gallery}></Carousel>
          </Paper>
        </div>
        <Paper className="mx-2">
          <ThemeProvider theme={theme}>
            <AppBar position="static" color="transparent" className="h-12">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="secondary"
                variant="fullWidth"
                aria-label="информация"
              >
                <Tab label="Описание" {...a11yProps(0)} />
                <Tab label="Характеристики" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
          </ThemeProvider>

          <SwipeableViews
            axis={"x"}
            index={value}
            onChangeIndex={handleChangeIndex}
            className="mb-8 bg-white border-t border-b"
          >
            <TabPanel value={value} index={0}>
              {/* <div className="player-wrapper mt-1 mb-4">
                <ReactPlayer
                  className="react-player"
                  url={document.video.embed_url}
                  width="100%"
                  height="100%"
                />
              </div> */}

              <p className="text-sm">{document.description.text}</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="flex text-sm">
                <p className="w-1/2">Мощност:</p>
                <p className="w-1/2">{document.power.text}</p>
              </div>
              <hr className="hr-line-table border-gray-400"></hr>
              <div className="flex text-sm">
                <p className="w-1/2">Капацитет:</p>
                <p className="w-1/2">{document.capacity.text}</p>
              </div>
              <hr className="hr-line-table border-gray-400"></hr>
              <div className="flex text-sm">
                <p className="w-1/2">Тегло:</p>
                <p className="w-1/2">{document.weight.text}</p>
              </div>
              <hr className="hr-line-table border-gray-400"></hr>
              <div className="flex text-sm">
                <p className="w-1/2">Дължина:</p>
                <p className="w-1/2">{document.length.text}</p>
              </div>
              <hr className="hr-line-table border-gray-400"></hr>
              <div className="flex text-sm">
                <p className="w-1/2">Височина:</p>
                <p className="w-1/2">{document.height.text}</p>
              </div>
              <hr className="hr-line-table border-gray-400"></hr>
              <div className="flex text-sm">
                <p className="w-1/2">Широчина:</p>
                <p className="w-1/2">{document.width.text}</p>
              </div>
              <hr className="hr-line-table border-gray-400"></hr>
            </TabPanel>
          </SwipeableViews>
        </Paper>
      </div>

      <ContactForm></ContactForm>
    </>
  )
}
export const query = graphql`
  query($slug: String!) {
    allPrismicProduct(filter: { uid: { eq: $slug } }) {
      edges {
        node {
          uid
          data {
            gallery {
              image {
                alt
                url(imgixParams: { height: 400 })
                fluid {
                  base64
                  src
                  srcSet
                }
              }
            }

            video {
              html
              embed_url
            }

            capacity {
              text
            }
            description {
              text
            }
            height {
              text
            }
            length {
              text
            }
            power {
              text
            }
            product_name {
              text
            }
            weight {
              text
            }
            width {
              text
            }
            category {
              uid
            }
          }
        }
      }
    }
  }
`
export default Product
