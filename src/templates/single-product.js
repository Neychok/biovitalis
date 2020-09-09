import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="p-3">
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#27ab83',
      main: '#0c6b58',
      dark: '#102A43',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bcccdc',
      main: '#627D98',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background:{
      main: '#fff'
    }
  },
});

const Product = ({ data }) => {
  const document = data.allPrismicProduct.edges[0].node.data

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  })

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "progressive",
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  }

  const settingsThumbs = {
    className: "center",
    centerPadding: "60px",
    centerMode: true,
    lazyLoad: "progressive",
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    swipeToSlide: true,
    focusOnSelect: true,
  }
  const slidesData = [
    {
      id: 1,
      title: "repellendus id ullam",
      label: "Dolorem officiis temporibus.",
    },
    {
      id: 2,
      title: "excepturi consequatur est",
      label: "Officia non provident dolor esse et neque.",
    },
    {
      id: 3,
      title: "eius doloribus blanditiis",
      label: "Ut recusandae vel vitae molestiae id soluta.",
    },
    {
      id: 4,
      title: "nihil voluptates delectus",
      label: "Qui vel consequatur recusandae illo repellendus.",
    },
    {
      id: 5,
      title: "nemo dolorem necessitatibus",
      label: "Placeat odit velit itaque voluptatem.",
    },
    {
      id: 6,
      title: "dolorem quibusdam quasi",
      label: "Adipisci officiis repudiandae.",
    },
  ]

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <SEO title="Home" />


      {/* Wrapper for the Breadcrumbs, back button, Slider, Title */}
        <Breadcrumbs
          aria-label="breadcrumb"
          maxItems={3}
          className="w-full px-4"
        >
          <Link to="/продукти/" className="mb-0">
            Продукти
          </Link>
          <Link
            to={`/продукти/${document.category.uid}/`}
            className="mb-0"
          >
            {document.category.uid}
          </Link>
          <p className="mb-0">
            {data.allPrismicProduct.edges[0].node.uid}
          </p>
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

        <Paper elevation={1} className="pb-1 mb-8">
        {/* Product Name */}
        <h1 className="px-4 pt-2 pb-3 text-xl">{document.product_name.text}</h1>

        {/* Main image slider */}
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => setSlider1(slider)}
        >
          {slidesData.map(slide => (
            <div className="">
              <img className="mb-0" src={`https://picsum.photos/800/400`} />
            </div>
          ))}
        </Slider>

        {/* Thumbnail slider */}
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={slider => setSlider2(slider)}
        >
          {slidesData.map(slide => (
            <div className="">
              <img
                className="px-1 mb-1"
                src={`https://picsum.photos/800/400`}
              />
            </div>
          ))}
        </Slider>
      </Paper>

      <Paper>
      <ThemeProvider theme={theme}>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
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
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        className="border-b mb-8 border-t bg-white"
      >
        <TabPanel value={value} index={0} >
        <p>{document.description.text}</p>
        </TabPanel>
        <TabPanel value={value} index={1} >
        <p>Мощност: {document.power.text}</p>
        <p>Капацитет: {document.capacity.text}</p>
        <p>Тегло: {document.weight.text}</p>
        <p>Дължина: {document.length.text}</p>
        <p>Височина: {document.height.text}</p>
        <p>Широчина: {document.width.text}</p>
        </TabPanel>
      </SwipeableViews>
      </Paper>
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
