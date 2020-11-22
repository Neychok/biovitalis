import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Paper from "@material-ui/core/Paper"

import ConsultationIcon from "../assets/svgs/consultation.svg"
import DevelopmentIcon from "../assets/svgs/development.svg"
import SolutionIcon from "../assets/svgs/solution.svg"
import StrategyIcon from "../assets/svgs/strategy.svg"
import PromotionIcon from "../assets/svgs/promotion.svg"
import MedalIcon from "../assets/svgs/medal.svg"
import CleanIcon from "../assets/svgs/clean.svg"
import ProductionIcon from "../assets/svgs/production.svg"

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
          className="bg-primary-1000 px-6 py-3 mt-20 mb-16 border-l-2 border-r-2 rounded-md shadow-lg"
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
      <h2 className="mb-6 text-2xl font-semibold text-center">Кои сме ние</h2>

      <p className="mb-6 text-center">
        Bio Vitalis Ви предлага най-доброто решение в производството и
        пакетирането на сок от плодове и зеленчуци.
      </p>
      <p className="mb-4 font-semibold text-center">
        Фирмата е официален представител на:
      </p>

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
        className="bg-secondary-800 flex justify-center px-6 py-3 text-white rounded-md shadow"
      >
        Виж повече за нас
      </Link>
    </Paper>

    {/* What we offer */}
    <Paper
      id="info"
      className="text-primary-black border-color-primary p-4 my-10 bg-white border-b-2"
    >
      <h2 className="Праmb-6 text-2xl font-semibold text-center">
        Какво предлагаме
      </h2>
      <p className="mb-8 text-center">
        Благодарение на многогодишният ни опит ориентиран към клиента и анализ
        на пазара ние Ви предлагаме:
      </p>

      {/* Consultation */}
      <Paper elevation={2} className="flex flex-col justify-center p-4 mb-8">
        <ConsultationIcon className="w-auto h-24 mb-6" />
        <p>
          Технически съвети по технологичния процес, при промяна или разширяване
          на системи
        </p>
      </Paper>

      {/* Development */}
      <Paper elevation={2} className="flex flex-col justify-center p-4 mb-8">
        <DevelopmentIcon className="w-auto h-24 mb-6" />
        <ul className="list-disc list-inside">
          <li>
            Продуктова гама, която съответства на най-съвременните технологии и
            буквално расте с нашите клиенти
          </li>
        </ul>
      </Paper>

      {/* Solution */}
      <Paper elevation={2} className="flex flex-col justify-center p-4 mb-8">
        <SolutionIcon className="w-auto h-24 mb-6" />
        <p className="mb-2">
          Изработване и разпространение на специфичните за клиента детайли, като
          например:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-1">Планове и пространствени изисквания</li>
          <li className="mb-1">Примери и препоръки за нашите продукти</li>
          <li className="mb-1">Съвети, свързани с практическия опит</li>
          <li>
            Разнообразни възможности в областта на логистиката и технологията за
            съхранение
          </li>
        </ul>
      </Paper>

      {/* Strategy */}
      <Paper elevation={2} className="flex flex-col justify-center p-4 mb-8">
        <StrategyIcon className="w-auto h-24 mb-6" />
        <p className="mb-2">
          Нашите партньори непрекъснато разработват и тестват нови процеси и
          машини. На преден план е анализирането на новите тенденции за
          осигуряване на конкурентно предимство.
        </p>
      </Paper>
    </Paper>

    {/* What you need */}
    <Paper
      id="info"
      className="text-primary-black border-color-primary p-4 my-10 bg-white"
    >
      <h2 className="mb-6 text-2xl font-semibold text-center">
        Ние знаем от какво се нуждае вашия бизнес
      </h2>
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
      <ul className="my-4 list-none">
        <li className="border-color-primary-1000 flex items-center py-1 pl-2 mb-3 border-l-2">
          <MedalIcon className="w-auto h-12 ml-1" />
          <p className="w-4/5 pl-4">
            Познаване на процесите на преработка и качество
          </p>
        </li>

        <li className="border-color-primary-1000 flex items-center py-1 pl-2 mb-3 border-l-2">
          <CleanIcon className="w-auto h-12 ml-1" />
          <p className="w-4/5 pl-4">
            Хигиенни условия-чистота на изходните материали и машини
          </p>
        </li>

        <li className="border-color-primary-1000 flex items-center py-1 pl-2 mb-3 border-l-2">
          <ProductionIcon className="w-auto h-12 ml-1" />
          <p className="w-4/5 pl-4">Производство и технология на машините</p>
        </li>

        <li className="border-color-primary-1000 flex items-center py-1 pl-2 border-l-2">
          <PromotionIcon className="w-auto h-12 ml-1" />
          <p className="w-4/5 pl-4">Маркетинг</p>
        </li>
      </ul>
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
