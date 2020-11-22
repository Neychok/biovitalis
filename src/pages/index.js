import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Paper from "@material-ui/core/Paper"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />

    {/* Hero */}
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
        <h2 className="px-4 py-4 text-xl text-center">
          Машини за производство и пакетиране на сок от плодове и зеленчуци
        </h2>
        <Link
          to="/sokoproizvostvo"
          className="bg-primary-900 px-6 py-3 mt-20 mb-16 border-l-2 border-r-2 rounded-md shadow-lg"
        >
          Разгледай
        </Link>
      </div>
    </div>
    {/* Who are we */}
    <Paper
      id="whoarewe"
      className="text-primary-black border-color-primary px-4 pt-6 pb-4 mt-20 bg-white"
    >
      <h2 className="mb-6 text-2xl text-center">Кои сме ние</h2>
      <p className="mb-4 text-center">
        Bio Vitalis Ви предлага най-доброто решение в производството и
        пакетирането на сок от плодове и зеленчуци.
      </p>
      <span className="text-center">Фирмата е официален представител на:</span>

      {/* VORAN */}
      <div className="border-color-primary flex items-center justify-between mt-2 mb-8">
        <div>
          <Img
            className="w-24 rounded-full shadow-md"
            fluid={data.voran.childImageSharp.fluid}
          />
        </div>
        <div className="flex flex-col justify-center pl-4">
          <p>
            Лидерът в изработване на машини за преработка на директни сокове.
          </p>
          <hr className="hr-line mt-2 mb-0" />
        </div>
      </div>

      {/* SRAML */}
      <div className="border-color-primary flex items-center justify-between my-8">
        <div>
          <Img
            className="w-24 rounded-full shadow-md"
            fluid={data.sram.childImageSharp.fluid}
          />
        </div>
        <div className="pl-4">
          <p>
            Произвеждащи широка гама от машини с различни капацитети за
            производство на вино, сокове, нектари и пюрета.
          </p>
          <hr className="hr-line mt-2 mb-0" />
        </div>
      </div>

      {/* MARCHISIO */}
      <div className="border-color-primary flex items-center justify-between my-8">
        <div>
          <Img
            className="w-24 rounded-full shadow-md"
            fluid={data.marchisio.childImageSharp.fluid}
          />
        </div>
        <div className="pl-4">
          <p>Водещ производител на машини за винопроизводството.</p>
          <hr className="hr-line mt-2 mb-0" />
        </div>
      </div>

      {/* See more about us */}
      <Link
        to="/za-nas/"
        className="bg-secondary-900 flex justify-center px-6 py-3 text-white rounded-md shadow"
      >
        Виж повече за нас
      </Link>
    </Paper>
    {/* What we offer */}
    <Paper
      id="info"
      className="text-primary-black border-color-primary p-4 my-20 bg-white border-b-2"
    >
      <h2 className="mb-6 text-2xl text-center">Какво предлагаме</h2>
      <p>
        Благодарение на многогодишният ни опит ориентиран към клиента и анализ
        на пазара ние Ви предлагаме:
      </p>
      - Консултация за процесите и услугите; - Технически съвети по
      технологичния процес,при промяна или разширяване на системи; - Продуктова
      гама,която съответства на най-съвременните технологии и буквално расте с
      нашите клиенти; - Изработване и разпространение на специфичните за клиента
      детайли,като например: · Планове и пространсвени изисквания; · Примери и
      препоръки за нашите продукти; · Съвети,свързани с практическия опит; ·
      Разнообразни възможности в областта на логистиката и технологията за
      съхранение; Нашите партньори непрекъснато разработват и тестват нови
      процеси и машини.На преден план е анализирането на новите тенденции за
      осигуряване на конкурентно предимство.
    </Paper>
    {/* What you need */}
    <Paper
      id="info"
      className="text-primary-black border-color-primary p-4 mt-20 bg-white"
    >
      <h2 className="mb-6 text-2xl text-center">
        Ние знаем от какво се нуждае вашия бизнес
      </h2>
      {/* <Paper className="text-primary-black border-color-primary p-4 bg-white border-b-2 shadow-md"> */}
      <p>
        Целта на всеки производител на напитки е те да са естествени и вкусни,
        да имат дълъг живот и да се продават успешно.
      </p>
      <Img
        fluid={data.juice.childImageSharp.fluid}
        className="h-48 my-4 rounded-lg"
      />
      <p>
        За да се постигне тази цел в дългосрочен план, трябва да бъдат взети под
        внимание следните принципи:
      </p>
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
      {/* </Paper> */}
    </Paper>
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
    logo: file(relativePath: { eq: "logo.jpg" }) {
      ...fluidImage
    }
  }
`
export default IndexPage
