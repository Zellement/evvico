import { Image } from "react-datocms"
import { request } from "../lib/datocms"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import { NextSeo } from "next-seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import { responsiveImageFragment } from "../lib/fragments"
import CardsChargingPoints from "../components/cards--charging-points"

const WHY_CHOOSE_US_QUERY = `
  query WhyChooseUs {
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
    whyChoose {
      seo {
        description
        title
      }
      h1
      heroList
      contentStrapline
      content
      reasons {
        content
        title
        icon {
          url
        }
        backgroundImage {
          responsiveImage(imgixParams: { w: 500, h: 500, auto: format }) {
            ...responsiveImageFragment
          }
        }
      }
    }
  }
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: WHY_CHOOSE_US_QUERY,
  })
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <Layout accreditations={data.option.accreditations}>
      <NextSeo
        title={data.whyChoose.seo.title + " | Evvico"}
        description={data.whyChoose.seo.description}
      />

      <Header />

      <div className="container flex flex-col space-y-16 lg:mb-16 lg:flex-row lg:space-x-16 lg:space-y-0">
        <div className="flex flex-col flex-1 p-8 text-white bg-black lg:p-16">
          <h1 className="block mb-10 text-3xl font-bold leading-tight md:text-4xl xl:text-5xl">
            {data.whyChoose.h1}
          </h1>
          <div
            className="text-lg text-blue-100 content"
            dangerouslySetInnerHTML={{ __html: data.whyChoose.heroList }}
          />
        </div>
        <div className="flex flex-col flex-1 p-8">
          <p className="block leading-tight text-blue-500 text-l md:text-2xl xl:text-3xl">
            {data.whyChoose.contentStrapline}
          </p>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.whyChoose.content }}
          />
        </div>
      </div>

      <div className="flex flex-col overflow-hidden ">
        {data.whyChoose.reasons.map((item, key) => (
          <div className={"relative border-b border-gray-200 " + (key == 0 ? "border-t" : null) }>
            <div className="absolute top-0 left-0 w-1/2 h-full opacity-30">
              <Image
                data={item.backgroundImage.responsiveImage}
                lazyLoad="true"
                className="object-cover w-full h-full -z-20"
                pictureClassName="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-0 left-0 w-1/2 h-full opacity-40 bg-gradient-to-b from-blue-100"></div>
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l from-white"></div>
            <div
              key={key}
              className="container flex flex-col px-8 py-16 lg:flex-row lg:py-28"
            >
              <Fade>
                <div className="relative flex flex-col items-center lg:w-1/2 lg:items-start lg:justify-center">
                  <h2 className="p-4 mb-0 text-2xl leading-tight text-blue-600 lg:text-white lg:bg-black lg:text-4xl">
                    {item.title}
                  </h2>
                  <div className="p-4 lg:bg-black">
                    <img
                      className="w-auto h-full max-h-12"
                      src={item.icon.url}
                    />
                  </div>
                </div>
                <div
                  className="content lg:w-1/2"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </Fade>
            </div>
          </div>
        ))}
      </div>

      <CardsChargingPoints />
    </Layout>
  )
}
