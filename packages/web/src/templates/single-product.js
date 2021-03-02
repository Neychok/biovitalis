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
import "lazysizes"
import getYoutubeID from "get-youtube-id"

import ContactForm from "../components/contactform"

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
      main: "#3ebd93",
    },
    secondary: {
      main: "#627D98",
    },
    background: {
      main: "#fff",
    },
  },
})

const Product = ({ data }) => {
  const product = data.sanityJuicePressingProduct
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
      <div className="md:px-4 max-w-6xl px-3 mx-auto">
        {/* Wrapper for the Breadcrumbs, back button, Slider, Title */}
        <Breadcrumbs
          aria-label="breadcrumb"
          maxItems={3}
          className="w-full h-5 mt-1 mb-3 list-none"
        >
          <Link to="/sokoproizvodstvo/" className="mb-0">
            Машини
          </Link>
          <Link
            to={`/sokoproizvodstvo/${product.category.slug.current}/`}
            className="mb-0"
          >
            {product.category.slug.current}
          </Link>
          <p className="mb-0">{product.tabs.slug.current}</p>
        </Breadcrumbs>

        {/* Back Button */}
        <div className="xl:py-1 flex items-center justify-between py-2">
          <Link
            to={`/sokoproizvodstvo/${product.category.slug.current}/`}
            className="scrollToContact focus:bg-gray-200 hover:bg-gray-200 xl:px-5 xl:py-2 xl:text-lg inline-flex items-center py-1 pl-3 pr-4 text-center bg-white border-b-0 rounded-md shadow"
          >
            <svg
              className="h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 15 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 19l-7-7 7-7"
              />
            </svg>
            <span>Назад</span>
          </Link>

          {/* Изпрати запитване */}
          <Link
            to="#contactForm"
            className="scrollToContact xl:px-5 xl:py-3 xl:text-lg focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 text-center bg-white rounded-md shadow"
          >
            Изпрати запитване
          </Link>
        </div>

        {/* Product Name */}
        <h1 className="2xl:text-3xl lg:text-2xl xl:pt-5 py-2 mb-3 text-xl font-normal border-b-2 border-gray-300 border-opacity-75">
          {product.name}
        </h1>
      </div>

      <div className="md:flex md:px-4 md:mb-8 max-w-6xl mx-auto mb-4">
        {/*Slider Images */}
        <Paper
          elevation={1}
          className="md:w-1/2 lg:w-3/5 md:p-0 md:self-start md:mb-0 pb-1 mx-auto mb-4"
        >
          <Carousel
            images={product.tabs.gallery}
            placeholder={data.file.childImageSharp.fluid}
          ></Carousel>
        </Paper>

        {/* Табове */}
        <Paper className="md:w-1/2 md:ml-4">
          <ThemeProvider theme={theme}>
            <AppBar
              position="static"
              color="transparent"
              className="md:hidden h-12"
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="secondary"
                variant="fullWidth"
                aria-label="информация"
              >
                <Tab label="Характеристики" {...a11yProps(0)} />
                <Tab label="Описание" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
          </ThemeProvider>

          <SwipeableViews
            axis={"x"}
            index={value}
            onChangeIndex={handleChangeIndex}
            className="md:hidden mb-8 bg-white border-t border-b"
          >
            {/* ТАБ 1 Характеристики */}
            <TabPanel value={value} index={0}>
              {product.tabs.specifications.map(specs => {
                return (
                  <div key={specs.spec_name.id} className="md:mb-2">
                    <div className="text-primary-black flex py-2 text-sm">
                      <p className="w-1/2">{specs.spec_name.spec_name} :</p>
                      <p className="w-1/2">{specs.spec_value}</p>
                    </div>
                    <hr className="hr-line-table border-gray-400"></hr>
                  </div>
                )
              })}
            </TabPanel>
            {/* ТАБ 2 Описание */}
            <TabPanel value={value} index={1}>
              <iframe
                title={product.tabs.YoutubeUrl}
                modestbranding="1"
                showinfo="0"
                rel="0"
                iv_load_policy="3"
                autohide="0"
                frameBorder="0"
                allowFullScreen="1"
                className={`lazyload w-full h-48 mt-2 mb-3 ${
                  product.tabs.YoutubeUrl == null ? "hidden" : ""
                }`}
                data-src={`https://www.youtube.com/embed/${getYoutubeID(
                  product.tabs.YoutubeUrl
                )}`}
              />
              <p className="text-primary-black text-sm">
                {product.tabs.description}
              </p>
            </TabPanel>
          </SwipeableViews>

          {/* BIGGER SCREEN THAN PHONES */}
          {/* Характеристики */}
          <div className="md:block hidden">
            <div className="border-color-primary-500 py-3 text-center border-b">
              <p className="text-lg">Характеристики</p>
            </div>
            <div className="xl:px-6 p-3">
              {product.tabs.specifications.map(specs => {
                return (
                  <div key={specs.spec_name.id} className="md:mb-2">
                    <div className="text-primary-black lg:py-1 py-0.5 flex">
                      <p className="w-1/2 px-1">
                        {specs.spec_name.spec_name} :
                      </p>
                      <p className="w-1/2 px-1">{specs.spec_value}</p>
                    </div>
                    <hr className="hr-line-table border-gray-400"></hr>
                  </div>
                )
              })}
            </div>
          </div>
        </Paper>
      </div>

      {/* Описание */}
      <div className="md:px-4 max-w-6xl mx-auto">
        <Paper className="md:block md:mb-4 hidden">
          <div className="border-color-primary-500 py-3 mb-6 text-center border-b">
            <p className="text-lg">Описание</p>
          </div>
          <iframe
            title={product.tabs.YoutubeUrl}
            modestbranding="1"
            showinfo="0"
            rel="0"
            iv_load_policy="3"
            autohide="0"
            frameBorder="0"
            allowFullScreen="1"
            className={`lazyload w-full max-w-3xl mx-auto h-80 mb-8 px-6 ${
              product.tabs.YoutubeUrl == null ? "hidden" : ""
            }`}
            data-src={`https://www.youtube.com/embed/${getYoutubeID(
              product.tabs.YoutubeUrl
            )}`}
          />
          <p className="text-primary-black max-w-3xl px-6 pb-8 mx-auto text-lg">
            {product.tabs.description}
          </p>
        </Paper>

        <Paper className="max-w-6xl pb-4 mx-auto mb-4" id="contactForm">
          <div className="max-w-3xl mx-auto">
            <ContactForm
              message="Изпрати запитване за този продукт"
              product={product.name}
              productUrl={product.tabs.slug.current}
            ></ContactForm>
          </div>
        </Paper>
      </div>
    </>
  )
}
export const query = graphql`
  query($slug: String!) {
    sanityJuicePressingProduct(tabs: { slug: { current: { eq: $slug } } }) {
      name
      category {
        slug {
          current
        }
      }
      tabs {
        specifications {
          spec_value
          spec_name {
            spec_name
            id
          }
        }
        slug {
          current
        }
        YoutubeUrl
        gallery {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        description
      }
    }

    file(relativePath: { eq: "placeholder.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default Product
