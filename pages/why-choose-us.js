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
          responsiveImage {
            alt
            base64
            bgColor
            title
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

      <div className="container flex flex-col space-y-16 lg:flex-row lg:space-x-16 lg:space-y-0">
        <div className="flex flex-col flex-1 p-8 text-white bg-black lg:p-16">
          <h1 className="block mb-10 text-3xl font-bold leading-tight md:text-4xl xl:text-5xl">{data.whyChoose.h1}</h1>
          <div
            className="text-blue-100 content"
            dangerouslySetInnerHTML={{ __html: data.whyChoose.heroList }}
          />
        </div>
        <div className="flex flex-col flex-1 p-8">
          <p className="block leading-tight text-blue-500 text-l md:text-2xl xl:text-3xl">{data.whyChoose.contentStrapline}</p>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.whyChoose.content }}
          />
        </div>
      </div>

      {/* <Hero
        heroPrimary={data.whyChoose.heroPrimary}
        heroSecondary={data.whyChoose.heroSecondary}
        heroImage={data.whyChoose.heroImage}
      /> */}

      {/* <div className="container flex py-16 overflow-hidden lg:py-32">
        <div className="flex flex-col lg:flex-row lg:space-x-16">
          <Fade>
            <div className="flex flex-col p-4 content lg:w-1/2 lg:my-auto">
              <h1 className="mb-12 leading-tight">
                {data.whyChoose.h1}
              </h1>
              <Slide left><div className="relative z-10 p-8 pl-10 mb-12 text-xl text-white bg-blue-500 lg:pl-20 lg:p-16 lg:-mr-48 electric-bg">
                <div className="max-w-[600px]">{data.whyChoose.strapline}</div>
                <div className="w-4 h-[80%] absolute top-1/2 transform -translate-y-1/2 left-0 bg-blue-200"></div>
              </div></Slide>
              <div
              className="content"
                dangerouslySetInnerHTML={{ __html: data.whyChoose.content }}
              />
            </div>
          </Fade>
          <div className="flex flex-col mt-8 lg:flex-row lg:w-1/2 -z-10">
            <Slide right>
              <div className="h-96 sm:h-[300px] lg:w-full lg:h-auto">
                <Image
                  data={data.whyChoose.contentImage.responsiveImage}
                  lazyLoad="false"
                  className="object-cover w-full h-full"
                  pictureClassName="object-cover w-full h-full lg:object-cover"
                />
              </div>
            </Slide>
          </div>
        </div>
      </div> */}

      <CardsChargingPoints />
    </Layout>
  )
}
