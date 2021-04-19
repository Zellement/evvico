import { request } from "../lib/datocms"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Header from "../components/header"
import { NextSeo } from "next-seo"
import Hero from "../components/hero"
import { responsiveImageFragment } from "../lib/fragments"
import CardsChargingPoints from "../components/cards--charging-points"

const MAKE_AN_ENQUIRY_QUERY = `
  query MakeAnEnquiryQuery {
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
    makeAnEnquiry {
      seo {
        description
        title
      }
      heroImage {
        responsiveImage(imgixParams: { fit: crop, w: 1600, h: 800, auto: format }) {
          ...responsiveImageFragment
        }
      }
      heroPrimary
      heroSecondary
      h1
      content
    }
  }
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: MAKE_AN_ENQUIRY_QUERY,
  })
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <Layout accreditations={data.option.accreditations}>
      <NextSeo
        title={data.makeAnEnquiry.seo.title + " | Evvico"}
        description={data.makeAnEnquiry.seo.description}
      />

      <Header />

      <Hero
        heroPrimary={data.makeAnEnquiry.heroPrimary}
        heroSecondary={data.makeAnEnquiry.heroSecondary}
        heroImage={data.makeAnEnquiry.heroImage}
      />

      <div className="container flex max-w-screen-md py-16 overflow-hidden lg:py-32">
        <div className="flex flex-col w-full lg:flex-row lg:space-x-16">
          <Fade>
            <div className="flex flex-col w-full p-4">
              <h1 className="mb-12 text-xl leading-tight lg:text-4xl">
                {data.makeAnEnquiry.h1}
              </h1>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: data.makeAnEnquiry.content }}
              />
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  )
}
