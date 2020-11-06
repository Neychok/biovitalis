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
      <div className="absolute-middle landing-overlay flex flex-col items-center justify-end w-full h-full text-white">
        <h1 className="px-4 text-3xl font-semibold text-center">Био Виталис</h1>
        <h1 className="px-4 py-4 text-xl text-center">
          Машини за производство и пакетиране на сок от плодове и зеленчуци
        </h1>
        <Link
          to="/sokoproizvostvo"
          className="bg-primary-1000 px-6 py-3 mt-20 mb-16 border-l-2 border-r-2 rounded-md shadow-lg"
        >
          Разгледай
        </Link>
      </div>
    </div>

    <section id="whatweoffer" className="px-3 pt-6">
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

      <div className="text-primary-black border-color-primary p-4 bg-white border-b-2 rounded-md shadow-md">
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

    <section id="info" className="px-3 pt-16">
      <h2 className="text-primary-black mb-6 text-2xl text-center">
        Ние знаем от какво се нуждае вашия бизнес
      </h2>
      <div className="text-primary-black border-color-primary p-4 bg-white border-b-2 rounded-md shadow-md">
        <p>
          Целта на всеки производител на напитки е те да са естествени и
          вкусни,да имат дълъг живот и да се продават успешно.
        </p>
        <Img
          fluid={data.juice.childImageSharp.fluid}
          className="h-48 my-4 rounded-lg"
        />
        <p>
          За да се постигне тази цел в дългосрочен план,трябва да бъдат взети
          под внимание следните принципи:
          <ul className="list-disc list-inside">
            <li className="py-1 pl-2">
              Познаване на процесите на преработка и качество
            </li>
            <li className="py-1 pl-2">
              Хигиенни условия-чистота на изходните материали и машини
            </li>
            <li className="py-1 pl-2">Производство и технология на машините</li>
            <li className="py-1 pl-2">Маркетинг</li>
          </ul>
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

    juice: file(relativePath: { eq: "juice.jpg" }) {
      ...fluidImage
    }
  }
`
export default IndexPage
