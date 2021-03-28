import { Image } from "react-datocms"
import { request } from "../lib/datocms"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import { NextSeo } from 'next-seo'
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import { responsiveImageFragment } from "../lib/fragments"

const PUBLIC_EV_CHARGES_QUERY = `
  query HomeEvChargersQuery {
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
    page(filter: {slug: {eq: "public-ev-chargers"}}) {
      seo {
        description
        title
      }
      id
      heroImage {
        responsiveImage(imgixParams: { fit: crop, w: 1600, h: 800, auto: format }) {
          ...responsiveImageFragment
        }
      }
      heroPrimary
      heroSecondary
      h1
      strapline
      content
      contentImage {
        responsiveImage(imgixParams: { fit: crop, w: 800, h: 800, auto: format }) {
          ...responsiveImageFragment
        }
      }
    }
  }
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: PUBLIC_EV_CHARGES_QUERY,
  })
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <Layout accreditations={data.option.accreditations}>
      
      <NextSeo
        title={data.page.seo.title + " | Evvico"}
        description={data.page.seo.description}
      />

      <Header />

      <Hero
        heroPrimary={data.page.heroPrimary}
        heroSecondary={data.page.heroSecondary}
        heroImage={data.page.heroImage}
      />

      <div className="container flex py-16 overflow-hidden lg:py-32">
        <div className="flex flex-col lg:flex-row lg:space-x-16">
          <Fade>
            <div className="flex flex-col p-4 content lg:w-1/2 lg:my-auto">
              <h1 className="mb-12 leading-tight">
                {data.page.h1}
              </h1>
              <Slide left><div className="relative z-10 p-8 pl-10 mb-12 text-xl text-white bg-blue-500 lg:pl-20 lg:p-16 lg:-mr-48 electric-bg">
                <div class="max-w-[600px]">{data.page.strapline}</div>
                <div class="w-4 h-[80%] absolute top-1/2 transform -translate-y-1/2 left-0 bg-blue-200"></div>
              </div></Slide>
              <div
              className="content"
                dangerouslySetInnerHTML={{ __html: data.page.content }}
              />
            </div>
          </Fade>
          <div className="flex flex-col lg:flex-row lg:w-1/2 -z-10">
            <Slide right>
              <div className="h-96 sm:h-[300px] lg:w-full lg:h-auto">
                <Image
                  data={data.page.contentImage.responsiveImage}
                  lazyLoad="false"
                  className="object-cover w-full h-full"
                  pictureClassName="object-cover w-full h-full lg:object-cover"
                />
              </div>
            </Slide>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}
