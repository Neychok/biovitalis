module.exports = {
  siteMetadata: {
    title: `BioVitalis`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
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
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "neycho",
        accessToken:
          "MC5YMEZMMkJBQUFDUUFCSURl.Ehbvv73vv73vv71gEO-_ve-_vRLvv70H77-9Ie-_vUEl77-977-9EAdXQxnvv71Z77-9MBBzFAo",
        linkResolver: ({ node, key, value }) => doc => {
          // URL for a category type
          if (doc.type === "category") {
            return `/категория/${doc.uid}`
          }

          // URL for a product type
          if (doc.type === "product") {
            return `/продукт/${doc.uid}`
          }

          // URL for a page type
          if (doc.type === "page") {
            return `/${doc.uid}`
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
