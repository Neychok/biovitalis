import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Paper from "@material-ui/core/Paper"
import Layout from "../components/layout"

import ConsultationIcon from "../assets/svgs/consultation.svg"
import DevelopmentIcon from "../assets/svgs/development.svg"
import SolutionIcon from "../assets/svgs/solution.svg"
import StrategyIcon from "../assets/svgs/strategy.svg"
import PromotionIcon from "../assets/svgs/promotion.svg"
import MedalIcon from "../assets/svgs/medal.svg"
import CleanIcon from "../assets/svgs/clean.svg"
import ProductionIcon from "../assets/svgs/production.svg"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* Hero */}
      <div className="border-color-primary-1000 hero-image relative mx-auto border-b-4 shadow-inner">
        <Img
          objectFit="cover"
          objectPosition="85%"
          fluid={data.landingimage.childImageSharp.fluid}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute-middle landing-overlay flex flex-col items-center justify-center w-full h-full text-center text-white">
          <div className=" text-center">
            <h1 className="xl:text-6xl lg:text-4xl xl:mb-2 xl:font-normal px-4 text-4xl font-semibold">
              БиоВиталис
            </h1>
            <h3 className="xl:text-2xl lg:text-xl font-rubik xl:font-light px-4 py-4 text-xl font-normal">
              Машини за производство и пакетиране на сок от плодове и зеленчуци
            </h3>
          </div>
          <Link
            to="/sokoproizvodstvo"
            className="bg-primary-1000 hover:bg-green-700 lg:px-8 xl:text-lg lg:mt-32 md:mt-20 px-6 py-2 mt-10 duration-200 border-l-2 border-r-2 rounded-full shadow-lg"
          >
            Разгледай
          </Link>
        </div>
      </div>

      {/* Who are we */}
      <Paper id="whoarewe" className="box-section lg:pb-12 md:pb-8">
        <h2 className="xl:text-3xl py-6 text-2xl font-semibold text-center">
          Кои сме ние
        </h2>
        <p className="md:px-20 md:text-lg mb-10 text-center">
          Bio Vitalis Ви предлага най-доброто решение в производството и
          пакетирането на сок от плодове и зеленчуци.
        </p>

        <p className="mb-4 font-semibold text-center">
          Фирмата е официален представител на:
        </p>

        <div className="flex flex-wrap">
          {/* VORAN */}
          <div className="represent-section">
            <div className="xl:w-2/5 md:w-1/2 w-1/4 p-1">
              <Img
                className="w-full rounded-full shadow-md"
                fluid={data.voran.childImageSharp.fluid}
              />
            </div>
            <div className="represent-inner-section">
              <h2 className="represent-title">Voran</h2>
              <p className="lg:px-6 md:mb-2 md:text-center md:px-4">
                Лидерът в изработване на машини за преработка на директни
                сокове.
              </p>
              <hr className="hr-line md:self-center md:mt-auto mt-4" />
            </div>
          </div>

          {/* SRAML */}
          <div className="represent-section">
            <div className="xl:w-2/5 md:w-1/2 w-1/4 p-1">
              <Img
                className="w-full rounded-full shadow-md"
                fluid={data.sram.childImageSharp.fluid}
              />
            </div>
            <div className="represent-inner-section">
              <h2 className="represent-title">Sraml</h2>
              <p className="lg:px-6 md:mb-2 md:text-center md:px-4">
                Произвеждат широка гама от машини с различни капацитети за
                производство на вино, сокове, нектари и пюрета.
              </p>
              <hr className="hr-line md:self-center md:mt-auto mt-4" />
            </div>
          </div>

          {/* MARCHISIO */}
          <div className="represent-section">
            <div className="xl:w-2/5 md:w-1/2 w-1/4 p-1">
              <Img
                className="w-full rounded-full shadow-md"
                fluid={data.marchisio.childImageSharp.fluid}
              />
            </div>
            <div className="represent-inner-section">
              <h2 className="represent-title">Marchisio</h2>
              <p className="lg:px-6 md:mb-2 md:text-center md:px-4">
                Водещ производител на машини за винопроизводството.
              </p>
              <hr className="hr-line md:self-center md:mt-auto mt-4" />
            </div>
          </div>
        </div>
      </Paper>

      {/* What we offer */}
      <Paper
        id="info"
        className="box-section lg:pb-12 lg:px-12 md:px-8 sm:px-10"
      >
        <h2 className="xl:text-3xl py-6 text-2xl font-semibold text-center">
          Какво предлагаме
        </h2>
        <p className="md:px-20 md:text-lg mb-8 text-center">
          Благодарение на многогодишният ни опит ориентиран към клиента и анализ
          на пазара ние Ви предлагаме:
        </p>
        <div className="lg:px-8 flex flex-wrap">
          {/* Consultation */}
          <div className="lg:pr-4 xl:pr-6 md:w-1/2 md:pr-2">
            <Paper elevation={3} className="offer-box md:h-80">
              <ConsultationIcon className="w-auto h-24 mb-6" />
              <h3 className="offer-title md:h-8">Консултация</h3>
              <p className=" p-2">
                Технически съвети по технологичния процес, при промяна или
                разширяване на системи
              </p>
            </Paper>
          </div>
          {/* Development */}
          <div className="lg:pl-4 xl:pl-6 md:w-1/2 md:pl-2">
            <Paper elevation={3} className="offer-box md:h-80">
              <DevelopmentIcon className="w-auto h-24 mb-6" />
              <h3 className="offer-title md:h-8">Широка гама продукти</h3>
              <p className=" p-2">
                Продуктова гама, която съответства на най-съвременните
                технологии и буквално расте с нашите клиенти
              </p>
            </Paper>
          </div>

          {/* Solution */}
          <div className="lg:pr-4 xl:pr-6 md:w-1/2 md:pr-2">
            <Paper elevation={3} className="offer-box md:h-96 ">
              <SolutionIcon className="w-auto h-24 mb-6" />
              <h3 className="offer-title md:text-lg lg:h-14 md:h-18">
                Изработване и разпространение на специфичните за клиента детайли
              </h3>
              <ul className="md:text-base p-1 list-disc list-inside">
                <li className="mb-0.5">Планове и пространствени изисквания</li>
                <li className="mb-0.5">
                  Примери и препоръки за нашите продукти
                </li>
                <li className="mb-0.5">Съвети, свързани с практическия опит</li>
                <li>
                  Разнообразни възможности в областта на логистиката и
                  технологията за съхранение
                </li>
              </ul>
            </Paper>
          </div>
          {/* Strategy */}
          <div className="lg:pl-4 xl:pl-6 md:w-1/2 md:pl-2">
            <Paper elevation={3} className="offer-box md:h-96">
              <StrategyIcon className="w-auto h-24 mb-6" />
              <h3 className="offer-title md:h-14">Консултация</h3>
              <p className="p-2">
                Нашите партньори непрекъснато разработват и тестват нови процеси
                и машини. На преден план е анализирането на новите тенденции за
                осигуряване на конкурентно предимство.
              </p>
            </Paper>
          </div>
        </div>
      </Paper>

      {/* What you need */}
      <Paper
        id="info"
        className="box-section lg:pb-12 lg:px-16 md:px-8 sm:px-10 mb-10"
      >
        <h2 className="xl:text-3xl py-6 text-2xl font-semibold text-center">
          Ние знаем от какво се нуждае вашия бизнес
        </h2>
        <p className="md:px-20 xl:text-lg mb-8 text-center">
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
            <p className="md:mb-2">
              За да се постигне тази цел в дългосрочен план, трябва да бъдат
              взети под внимание следните принципи:
            </p>
            <ul className=" my-4 font-normal list-none">
              <li className="need-section">
                <MedalIcon className="w-auto h-12 ml-1" />
                <p className="w-4/5 pl-6">
                  Познаване на процесите на преработка и качество
                </p>
              </li>

              <li className="need-section">
                <CleanIcon className="w-auto h-12 ml-1" />
                <p className="w-4/5 pl-6">
                  Хигиенни условия-чистота на изходните материали и машини
                </p>
              </li>

              <li className="need-section">
                <ProductionIcon className="w-auto h-12 ml-1" />
                <p className="w-4/5 pl-6">
                  Производство и технология на машините
                </p>
              </li>

              <li className="need-section">
                <PromotionIcon className="w-auto h-12 ml-1" />
                <p className="w-4/5 pl-6">Маркетинг</p>
              </li>
            </ul>
          </div>
        </div>

        <Link
          to="/kontakti/"
          className="bg-secondary-800 md:mt-8 lg:py-4 lg:w-1/2 lg:mx-auto lg:text-xl flex justify-center w-full px-6 py-3 mt-4 text-white rounded-md shadow"
        >
          Свържи се с нас
        </Link>
      </Paper>
    </Layout>
  )
}
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
    landingimage: file(relativePath: { eq: "landing-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
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
