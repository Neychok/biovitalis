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
    <div className="border-color-primary-1000 hero-image container relative mx-auto border-b-4 shadow-inner">
      <Img
        objectFit="cover"
        objectPosition="85%"
        fluid={data.landingimage.childImageSharp.fluid}
        className="absolute top-0 left-0 z-0 w-full h-full"
      />
      <div className="absolute-middle landing-overlay z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
        <div>
          <h1 className="px-4 text-3xl font-semibold text-center">
            Био Виталис
          </h1>
          <h2 className="px-4 py-4 text-xl text-center">
            Машини за производство и пакетиране на сок от плодове и зеленчуци
          </h2>
        </div>
        <Link
          to="/sokoproizvodstvo"
          className="bg-primary-1000 px-6 py-3 mt-20 border-l-2 border-r-2 rounded-md shadow-lg"
        >
          Разгледай
        </Link>
      </div>
    </div>

    {/* Who are we */}
    <Paper
      id="whoarewe"
      className="text-primary-black border-color-primary md:px-4 sm:px-10 md:pb-8 container px-4 pb-4 mx-auto mt-20 bg-white"
    >
      <h2 className="py-6 text-2xl font-semibold text-center">Кои сме ние</h2>

      <p className="mb-10 text-center">
        Bio Vitalis Ви предлага най-доброто решение в производството и
        пакетирането на сок от плодове и зеленчуци.
      </p>
      <p className="mb-4 font-semibold text-center">
        Фирмата е официален представител на:
      </p>

      <div className="flex flex-wrap">
        {/* VORAN */}
        <div className="border-color-primary md:w-1/3 md:justify-start md:flex-col md:text-center md:m-0 flex items-center justify-between w-full mt-2 mb-4">
          <div className="md:w-1/2 w-1/4 p-1">
            <Img
              className="w-full rounded-full shadow-md"
              fluid={data.voran.childImageSharp.fluid}
            />
          </div>
          <div className="md:w-full md:p-0 md:mt-4 justify-evenly flex flex-col w-3/4 pl-4">
            <p className="lg:px-8 md:mb-2 md:text-center md:px-4">
              Лидерът в изработване на машини за преработка на директни сокове.
            </p>
            <hr className="hr-line md:self-center mt-2 mb-0" />
          </div>
        </div>

        {/* SRAML */}
        <div className="border-color-primary md:w-1/3 md:justify-start md:flex-col md:m-0 flex items-center justify-between w-full my-4">
          <div className="md:w-1/2 w-1/4 p-1">
            <Img
              className="w-full rounded-full shadow-md"
              fluid={data.sram.childImageSharp.fluid}
            />
          </div>
          <div className="md:p-0 md:w-full md:mt-4 justify-evenly flex flex-col w-3/4 h-full pl-4">
            <p className="lg:px-8 md:mb-2 md:text-center md:px-4">
              Произвеждат широка гама от машини с различни капацитети за
              производство на вино, сокове, нектари и пюрета.
            </p>
            <hr className="hr-line md:self-center mt-2 mb-0" />
          </div>
        </div>

        {/* MARCHISIO */}
        <div className="border-color-primary md:w-1/3 md:justify-start md:flex-col md:m-0 flex items-center justify-between w-full my-4">
          <div className="md:w-1/2 w-1/4 p-1">
            <Img
              className="w-full rounded-full shadow-md"
              fluid={data.marchisio.childImageSharp.fluid}
            />
          </div>
          <div className="md:p-0 md:w-full md:mt-4 justify-evenly flex flex-col w-3/4 pl-4">
            <p className="lg:px-8 md:mb-2 md:text-center md:px-4 w-full">
              Водещ производител на машини за винопроизводството.
            </p>
            <hr className="hr-line md:self-center mt-2 mb-0" />
          </div>
        </div>
      </div>

      {/* Client Map
      <h2 className="mt-8 mb-4 font-semibold text-center">
        Имаме клиенти из цяла България
      </h2>
      <ClientMap /> */}
    </Paper>

    {/* What we offer */}
    <Paper
      id="info"
      className="text-primary-black border-color-primary lg:px-12 md:px-8 sm:px-10 container px-4 pb-4 mx-auto my-10 bg-white border-b-2"
    >
      <h2 className="py-6 text-2xl font-semibold text-center">
        Какво предлагаме
      </h2>
      <p className="mb-8 text-center">
        Благодарение на многогодишният ни опит ориентиран към клиента и анализ
        на пазара ние Ви предлагаме:
      </p>
      <div className="flex flex-wrap">
        {/* Consultation */}
        <div className="lg:pr-4 md:w-1/2 md:pr-2">
          <Paper
            elevation={2}
            className="md:justify-start flex flex-col justify-center w-full p-4 mb-8"
          >
            <ConsultationIcon className="w-auto h-24 mb-6" />
            <p>
              Технически съвети по технологичния процес, при промяна или
              разширяване на системи
            </p>
          </Paper>
        </div>
        {/* Development */}
        <div className="lg:pl-4 md:w-1/2 md:pl-2">
          <Paper
            elevation={2}
            className="md:justify-start flex flex-col justify-center w-full p-4 mb-8"
          >
            <DevelopmentIcon className="w-auto h-24 mb-6" />
            <p>
              Продуктова гама, която съответства на най-съвременните технологии
              и буквално расте с нашите клиенти
            </p>
          </Paper>
        </div>

        {/* Solution */}
        <div className="lg:pr-4 md:w-1/2 md:pr-2">
          <Paper
            elevation={2}
            className="md:justify-start flex flex-col justify-center w-full p-4 mb-8"
          >
            <SolutionIcon className="w-auto h-24 mb-6" />
            <p className="mb-2">
              Изработване и разпространение на специфичните за клиента детайли,
              като например:
            </p>
            <ul className="md:text-sm list-disc list-inside">
              <li className="mb-1">Планове и пространствени изисквания</li>
              <li className="mb-1">Примери и препоръки за нашите продукти</li>
              <li className="mb-1">Съвети, свързани с практическия опит</li>
              <li>
                Разнообразни възможности в областта на логистиката и
                технологията за съхранение
              </li>
            </ul>
          </Paper>
        </div>
        {/* Strategy */}
        <div className="lg:pl-4 md:w-1/2 md:pl-2">
          <Paper
            elevation={2}
            className="md:justify-start flex flex-col justify-center w-full p-4 mb-8"
          >
            <StrategyIcon className="w-auto h-24 mb-6" />
            <p className="mb-2">
              Нашите партньори непрекъснато разработват и тестват нови процеси и
              машини. На преден план е анализирането на новите тенденции за
              осигуряване на конкурентно предимство.
            </p>
          </Paper>
        </div>
      </div>
    </Paper>

    {/* What you need */}
    <Paper
      id="info"
      className="text-primary-black border-color-primary md:px-8 sm:px-10 container px-4 pb-4 mx-auto my-10 bg-white"
    >
      <h2 className="py-6 text-2xl font-semibold text-center">
        Ние знаем от какво се нуждае вашия бизнес
      </h2>
      <p className="mb-8 text-center">
        Целта на всеки производител на напитки е те да са естествени и вкусни,
        да имат дълъг живот и да се продават успешно.
      </p>

      <div className="flex flex-row-reverse flex-wrap justify-center">
        <div className="md:w-1/2 md:pl-2 w-4/5 my-4 rounded-lg">
          <Img
            fluid={data.juice.childImageSharp.fluid}
            className="w-auto h-full rounded-lg"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <p className="">
            За да се постигне тази цел в дългосрочен план, трябва да бъдат взети
            под внимание следните принципи:
          </p>
          <ul className=" my-4 list-none">
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
              <p className="w-4/5 pl-4">
                Производство и технология на машините
              </p>
            </li>

            <li className="border-color-primary-1000 flex items-center py-1 pl-2 border-l-2">
              <PromotionIcon className="w-auto h-12 ml-1" />
              <p className="w-4/5 pl-4">Маркетинг</p>
            </li>
          </ul>
        </div>
      </div>

      <Link
        to="/kontakti/"
        className="bg-secondary-800 md:mt-4 flex justify-center px-6 py-3 text-white rounded-md shadow"
      >
        Свържи се с нас
      </Link>
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
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    voran: file(relativePath: { eq: "voran.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    marchisio: file(relativePath: { eq: "marchisio.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    sram: file(relativePath: { eq: "sram.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    juice: file(relativePath: { eq: "juice.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    logo: file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
