import { Image } from "react-datocms"
import { request } from "../lib/datocms"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import { useState } from "react"
import Head from "next/head"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import { responsiveImageFragment } from "../lib/fragments"
import CardsChargingPoints from "../components/cards--charging-points"

const FAQS_QUERY = `
  query FAQsQuery {
    option {
      accreditations {
        id
        responsiveImage {
          ...responsiveImageFragment
        }
        url
        format
      }
    }
    faq {
      heroImage {
        responsiveImage(imgixParams: { fit: crop, w: 1600, h: 800, auto: format }) {
          ...responsiveImageFragment
        }
      }
      heroPrimary
      heroSecondary
      h1
      faqs {
        detail
        summary
      }
    }
  }
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: FAQS_QUERY,
  })
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  const [toggleAllFaqs, settoggleAllFaqs] = useState(false)

  function openAll() {
    const allFaqs = document.querySelectorAll("details")
    for (const faq of allFaqs) {
      toggleAllFaqs == true ? (faq.open = false) : (faq.open = true)
    }
    let toggleButtonClasses
    toggleAllFaqs == true ? (toggleButtonClasses = "bg-red-500") : "bg-blue-500"
    settoggleAllFaqs(!toggleAllFaqs)
  }

  return (
    <Layout accreditations={data.option.accreditations}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          Evvico - Electric Vehicle Chargers for home, workplace and public
          spaces
        </title>
        <meta
          name="Electric Vehicle Chargers for home, workplace and public spaces"
          content="Electric Vehicle Chargers for home, workplace and public spaces"
        />
        <meta name="og:title" content="Website Title" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <Hero
        heroPrimary={data.faq.heroPrimary}
        heroSecondary={data.faq.heroSecondary}
        heroImage={data.faq.heroImage}
      />

      {console.log(toggleAllFaqs)}

      <div className="container flex max-w-screen-md py-16 overflow-hidden lg:py-32">
        <div className="flex flex-col w-full lg:flex-row lg:space-x-16">
          <Fade>
            <div className="flex flex-col w-full p-4">
              <h1 className="mb-12 text-xl leading-tight lg:text-4xl">
                {data.faq.h1}
              </h1>
              <button
                onClick={() => {
                  openAll()
                }}
                className="inline-flex flex-row p-4 mb-8 mr-auto space-x-4 border border-gray-100 rounded-lg focus:outline-none"
              >
                <span>Open all FAQs</span>
                <div className="flex flex-row items-center self-start w-16 p-px border border-gray-200 rounded-full">
                  <span
                    className={
                      "w-8 h-8 rounded-full " +
                      (toggleAllFaqs == true
                        ? " bg-blue-200 ml-auto"
                        : " bg-gray-200 ml-0")
                    }
                  ></span>
                </div>
              </button>
              <div className="flex flex-col space-y-3">
                {data.faq.faqs.map((item, key) => (
                  <Fade key={key} delay={key * 25}>
                    <details className="">
                      <summary className="p-2 outline-none cursor-pointer hover:bg-blue-100">
                        {item.summary}
                      </summary>
                      <div
                        className="py-12 pl-12 border-l border-blue-100 content"
                        dangerouslySetInnerHTML={{ __html: item.detail }}
                      />
                      <hr className="w-full h-px bg-blue-100 border-none" />
                    </details>
                  </Fade>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <CardsChargingPoints />
    </Layout>
  )
}
