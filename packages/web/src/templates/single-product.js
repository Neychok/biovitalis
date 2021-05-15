import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Paper from "@material-ui/core/Paper"
import Carousel from "../components/carousel"
import Layout from "../components/layout"

import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import SwipeableViews from "react-swipeable-views"
import "lazysizes"
import getYoutubeID from "get-youtube-id"
import BlockContent from "@sanity/block-content-to-react"
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

// Material UI Theme
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

  // Handles state for the swipeable tabs
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  // Needed for the tabs
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    }
  }

  // Renders the description
  const BlockRenderer = props => {
    const { style = "normal" } = props.node
    if (style === "h1") {
      return React.createElement(
        style,
        { className: `text-3xl mb-3` },
        props.children
      )
    } else if (style === "h2") {
      return React.createElement(
        style,
        { className: `text-2xl mb-2` },
        props.children
      )
    } else if (style === "h3") {
      return React.createElement(
        style,
        { className: `text-xl mb-2` },
        props.children
      )
    } else if (style === "normal") {
      return React.createElement(
        "p",
        { className: `text-lg mb-1` },
        props.children
      )
    }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
  }

  //* Cuts long text, used for the breadcrumbs
  function cutLongText(text) {
    if (text.length > 25) {
      return text.substring(0, 24) + "..."
    } else return text
  }

  //* Converts Sanity's Portable Text Blocks to plain text, used for the SEO description
  const description = blocks =>
    blocks
      .map(block => {
        if (block._type !== "block" || !block.children) {
          return ""
        }
        return block.children.map(child => child.text).join("")
      })
      .join("\n\n")
      .substr(0, 159)

  return (
    <Layout>
      <SEO
        title={product.name}
        description={
          product.tabs.metaDescription ||
          description(product.tabs._rawDescription)
        }
      />
      <div className="md:px-4 max-w-6xl px-3 mx-auto">
        {/* Wrapper for the Breadcrumbs, back button, Slider, Title */}
        <Breadcrumbs
          aria-label="breadcrumb"
          maxItems={3}
          className="list-none w-full py-1.5 mb-1"
        >
          <Link to="/sokoproizvodstvo/" className="mb-0">
            Машини
          </Link>
          <Link
            to={`/sokoproizvodstvo/${cutLongText(
              product.category.slug.current
            )}`}
            className="mb-0"
          >
            {product.category.slug.current}
          </Link>
          <p className="mb-0">{cutLongText(product.tabs.slug.current)}</p>
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
        <h1 className="2xl:text-2xl lg:text-xl xl:pt-5 py-3 mb-5 text-xl font-normal border-b-2 border-gray-300 border-opacity-75">
          {product.name}
        </h1>
      </div>

      <div className="md:flex md:px-4 md:mb-8 max-w-6xl mx-auto mb-4">
        {/*Slider Images */}
        <Paper
          elevation={1}
          className="md:w-1/2 xl:w-3/5 md:p-0 md:self-start md:mb-0 pb-1 mx-auto mb-4"
        >
          <Carousel
            images={product.tabs.gallery}
            productName={product.name}
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
                      <p className="w-1/2">{specs.spec_name.spec_name}:</p>
                      <p className="w-1/2">{specs.spec_value}</p>
                    </div>
                    <hr className="hr-line-table border-gray-400"></hr>
                  </div>
                )
              })}
            </TabPanel>
            {/* ТАБ 2 Описание */}
            <TabPanel value={value} index={1}>
              <p className="text-primary-black pt-4 pb-6">
                <BlockContent blocks={product.tabs._rawDescription} />
              </p>
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
                  <div
                    key={specs.spec_name.id}
                    className="md:mb-2 xl:text-base text-sm"
                  >
                    <div className="text-primary-black lg:py-1 py-0.5 flex">
                      <p className="w-1/2 px-1">{specs.spec_name.spec_name}:</p>
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
          <div className="max-w-3xl px-6 pb-8 mx-auto">
            <BlockContent
              blocks={product.tabs._rawDescription}
              serializers={{ types: { block: BlockRenderer } }}
            />
            <iframe
              title={product.tabs.YoutubeUrl}
              modestbranding="1"
              showinfo="0"
              rel="0"
              iv_load_policy="3"
              autohide="0"
              frameBorder="0"
              allowFullScreen="1"
              className={`lazyload w-full max-w-3xl mx-auto h-80 pb-6 px-6 ${
                product.tabs.YoutubeUrl == null ? "hidden" : ""
              }`}
              data-src={`https://www.youtube.com/embed/${getYoutubeID(
                product.tabs.YoutubeUrl
              )}`}
            />
            <p className="pt-4 mt-6 text-xs font-semibold text-gray-400 uppercase border-t">
              <span>Тагове: </span>
              {product.tabs.tags.map((tag, index) => {
                if (index + 1 == product.tabs.tags.length) {
                  return <span>{tag.value}</span>
                } else return <span>{tag.value}, </span>
              })}
            </p>
          </div>
        </Paper>
        {product.tabs.relatedProducts.length > 0 && (
          <Paper className="md:px-4 max-w-6xl px-2 pb-6 mx-auto mb-4">
            <div className="border-color-primary-500 py-3 mb-6 text-center border-b">
              <p className="text-lg">Свързани продукти</p>
            </div>
            <div className="md:grid-cols-3 lg:grid-cols-4 md:gap-4 grid grid-cols-2 gap-2">
              {product.tabs.relatedProducts.map(product => {
                return (
                  <div className="col-span-1 border rounded">
                    <Link
                      to={`/sokoproizvodstvo/${product.relatedProduct.category.slug.current}/${product.relatedProduct.tabs.slug.current}`}
                      className="w-full h-full"
                    >
                      <Img
                        fluid={
                          product.relatedProduct.tabs.gallery[0].image.asset
                            .fluid
                        }
                        className="max-h-48 object-cover rounded"
                      />
                      <p className="md:text-base px-2 py-4 text-sm border-t">
                        {product.relatedProduct.name}
                      </p>
                    </Link>
                  </div>
                )
              })}
            </div>
          </Paper>
        )}
        <Paper className="max-w-6xl pb-4 mx-auto mb-4" id="contactForm">
          <div className="max-w-3xl mx-auto">
            <ContactForm
              message="Изпрати запитване за този продукт"
              product={product.name}
            ></ContactForm>
          </div>
        </Paper>
      </div>
    </Layout>
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
        relatedProducts {
          relatedProduct {
            _key
            name
            category {
              slug {
                current
              }
            }
            tabs {
              slug {
                current
              }
              gallery {
                image {
                  asset {
                    fluid {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
              }
            }
          }
        }
        slug {
          current
        }
        tags {
          value
        }
        metaDescription
        YoutubeUrl
        gallery {
          alt
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        _rawDescription
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
