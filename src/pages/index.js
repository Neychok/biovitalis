import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <div
      className="border-color-primary-1000 relative border-b-4 shadow-inner"
      style={{ height: 500 }}
    >
      <Img
        objectFit="cover"
        objectPosition="85%"
        fluid={data.landingimage.childImageSharp.fluid}
        className="w-full h-full"
      />
      <div className="absolute-middle landing-overlay justify-evenly flex flex-col items-center w-full h-full text-white">
        <h1 className="px-4 py-4 text-2xl font-semibold text-center">
          Машини за производство и пакетиране на сок от плодове и зеленчуци
        </h1>
        <a
          href="#aboutus"
          className="bg-primary-1000 px-8 py-3 mt-8 border-l-2 border-r-2 rounded-md shadow-lg"
        >
          Разгледай
        </a>
      </div>
    </div>

    <section id="aboutus" className="px-3 py-12">
      <h2 className="text-primary-black mb-6 text-2xl text-center">За нас</h2>
      <div className="justify-evenly flex mb-6">
        <Img
          className="w-24 rounded-full shadow-md"
          fluid={data.voran.childImageSharp.fluid}
        />
        <Img
          className="w-24 rounded-full shadow-md"
          fluid={data.sram.childImageSharp.fluid}
        />
        <Img
          className="w-24 rounded-full shadow-md"
          fluid={data.marchisio.childImageSharp.fluid}
        />
      </div>

      <div className="text-primary-black p-4 bg-white rounded-md shadow-md">
        <p>
          Bio Vitalis Ви предлага най-доброто решение в производството и
          пакетирането на сок от плодове и зеленчуци.
        </p>
        <p>
          Фирмата е официален представител на <b>Voran</b> - лидерът в
          изработване на машини за преработка на директни сокове, <b>Sraml</b> -
          произвеждащи широка гама от машини с различни капацитети за
          производство на вино, сокове, нектари и пюрета, както и на
          <b> Marchisio</b> - водещ производител на машини за
          винопроизводството.
        </p>
      </div>
    </section>
  </>
)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    landingimage: file(relativePath: { eq: "landingimage.jpg" }) {
      ...fluidImage
    }

    voran: file(relativePath: { eq: "voran.png" }) {
      ...fluidImage
    }

    marchisio: file(relativePath: { eq: "marchisio.png" }) {
      ...fluidImage
    }

    sram: file(relativePath: { eq: "sram.png" }) {
      ...fluidImage
    }
  }
`
export default IndexPage
