const { createProxyMiddleware } = require("http-proxy-middleware")
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://biovitalisbg.com/`,
    title: `Био Виталис: Производство на натурални сокове`,
    description: `Машини за производство и пакетиране на сок от плодове и зеленчуци. Bio Vitalis Ви предлага най-доброто решение в производството и пакетирането на сок от плодове и зеленчуци.`,
    author: `@Neycho`,
  },

  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    // Plugin for SEO
    `gatsby-plugin-react-helmet`,

    // Plugin for filesystem data sourcing
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-Q882G0YHTY"],
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
    },
    // Plugin needed for TailwindCSS to work
    `gatsby-plugin-postcss`,
    `gatsby-plugin-material-ui`,

    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: false,
      },
    },
    `gatsby-plugin-sitemap`,

    // Plugin needed for PWA support
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BioVitalis`,
        short_name: `BioVitalis`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },

    // Plugin that purges all unused CSS from TailwindCSS
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
          "/public/sw.js": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
          "/public/page-data/*": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
        },
      },
    },
    // Plugin that adds offline support
    `gatsby-plugin-offline`,
    "gatsby-plugin-remove-serviceworker",
  ],
}
