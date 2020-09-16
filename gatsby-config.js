const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    siteUrl: `https://hungry-kowalevski-954933.netlify.app/`,
    title: `BioVitalis`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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

  plugins: [
    // Plugin for SEO
    `gatsby-plugin-react-helmet`,

    // Plugin for filesystem data sourcing
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // Plugin for image processing
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Plugin needed for TailwindCSS to work
    `gatsby-plugin-postcss`,
    `gatsby-plugin-material-ui`,

    // Adds Sitemap
    //TODO Configure Sitemap
    `gatsby-plugin-advanced-sitemap`,
    // {
    //   resolve: `gatsby-plugin-advanced-sitemap`,
    //   options: {
    //     // 1 query for each data type
    //     query: `
    //       {
    //           allGhostPost {
    //               edges {
    //                   node {
    //                       id
    //                       slug
    //                       updated_at
    //                       feature_image
    //                   }
    //               }
    //           }
    //           allGhostPage {
    //               edges {
    //                   node {
    //                       id
    //                       slug
    //                       updated_at
    //                       feature_image
    //                   }
    //               }
    //           }
    //           allGhostTag {
    //               edges {
    //                   node {
    //                       id
    //                       slug
    //                       feature_image
    //                   }
    //               }
    //           }
    //           allGhostAuthor {
    //               edges {
    //                   node {
    //                       id
    //                       slug
    //                       profile_image
    //                   }
    //               }
    //           }
    //       }`,
    //     mapping: {
    //       // Each data type can be mapped to a predefined sitemap
    //       // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
    //       // The default sitemap - if none is passed - will be pages
    //       allGhostPost: {
    //         sitemap: `posts`,
    //       },
    //       allGhostTag: {
    //         sitemap: `tags`,
    //       },
    //       allGhostAuthor: {
    //         sitemap: `authors`,
    //       },
    //       allGhostPage: {
    //         sitemap: `pages`,
    //       },
    //     },
    //     exclude: [
    //       `/dev-404-page`,
    //       `/404`,
    //       `/404.html`,
    //       `/offline-plugin-app-shell-fallback`,
    //       `/my-excluded-page`,
    //       /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
    //     ],
    //     createLinkInHead: true, // optional: create a link in the `<head>` of your site
    //     addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
    //     additionalSitemaps: [
    //       // optional: add additional sitemaps, which are e. g. generated somewhere else, but need to be indexed for this domain
    //       {
    //         name: `my-other-posts`,
    //         url: `/blog/sitemap-posts.xml`,
    //       },
    //       {
    //         url: `https://example.com/sitemap.xml`,
    //       },
    //     ],
    //   },
    // },

    // Plugin that makes the menu persistent when browsing through the site
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },

    // Plugin needed for PWA support
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // Plugin needed for Prismic CMS
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "neycho",
        accessToken:
          "MC5YMEZMMkJBQUFDUUFCSURl.Ehbvv73vv73vv71gEO-_ve-_vRLvv70H77-9Ie-_vUEl77-977-9EAdXQxnvv71Z77-9MBBzFAo",
        linkResolver: ({ node, key, value }) => doc => {
          // URL for a category type
          if (doc.type === "category") {
            return `/продукти/${doc.uid}/`
          }

          // URL for a product type
          if (doc.type === "product") {
            return `/продукти/${doc.data.category.uid}/${doc.uid}/`
          }

          // URL for a page type
          if (doc.type === "page") {
            return `/${doc.uid}/`
          }

          // Backup for all other types
          return "/"
        },

        fetchLinks: [
          // Your list of links
        ],
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // switch(type) {
          //   // Add a class to paragraph elements
          //   case Elements.paragraph:
          //     return '<p class="paragraph-class">' + children.join('') + '</p>';
          //   // Don't wrap images in a <p> tag
          //   case Elements.image:
          //     return '<img src="' + element.url + '" alt="' + element.alt + '">';
          //   // Add a class to hyperlinks
          //   case Elements.hyperlink:
          //     var target = element.data.target ? 'target="' + element.data.target + '" rel="noopener"' : '';
          //     var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
          //     return '<a class="some-link"' + target + ' href="' + linkUrl + '">' + content + '</a>';
          //   // Return null to stick with the default behavior for all other elements
          //   default:
          //     return null;
          // }
        },

        schemas: {
          // Your custom types mapped to schemas
          product: require("./src/schemas/product.json"),
        },
        lang: "*",

        prismicToolbar: false,

        // Set a function to determine if images are downloaded locally and made
        // available for gatsby-transformer-sharp for use with gatsby-image.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different logic for each field if necessary.
        // This defaults to always return false.
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return false
        },

        // Provide a default set of Imgix image transformations applied to
        // Imgix-backed gatsby-image fields. These options will override the
        // defaults set by Prismic.
        // See: https://docs.imgix.com/apis/url
        imageImgixParams: {
          auto: "compress,format",
          fit: "max",
          q: 50,
        },

        // Provide a default set of Imgix image transformations applied to
        // the placeholder images of Imgix-backed gatsby-image fields. These
        // parameters will be applied over those provided in the above
        // `imageImgixParams` option.
        // See: https://docs.imgix.com/apis/url
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },

        typePathsFilenamePrefix: "prismic-typepaths---neycho",
      },
    },

    // Plugin that purges all unused CSS from TailwindCSS
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        whitelist: [],
        printRejected: true,
        develop: false,
        tailwind: true,
        ignore: [
          "slick-carousel/slick/slick.css",
          "slick-carousel/slick/slick-theme.css",
          "gatsby-plugin-transition-link/style.css",
        ],
      },
    },

    // Plugin that adds offline support
    `gatsby-plugin-offline`,
    "gatsby-plugin-remove-serviceworker",
  ],
}
