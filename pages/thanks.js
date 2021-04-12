import { Image } from "react-datocms"
import { request } from "../lib/datocms"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import { NextSeo } from 'next-seo'
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import { responsiveImageFragment } from "../lib/fragments"
import CardsChargingPoints from "../components/cards--charging-points"

const THANKS_QUERY = `
  query AboutUsQuery {
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
  }
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: THANKS_QUERY,
  })
  return {
    props: { data },
  }
}

export default function Thanks({ data }) {
  return (
    <Layout accreditations={data.option.accreditations}>

      <NextSeo
        title="Thank You | Evvico"
        description="Thanks for contacting Evvico"
      />

      <Header />


      <div className="container py-16 overflow-hidden lg:py-32">
        <h1 className="text-4xl">Thanks!</h1>
        <p>Thanks for getting in touch with us - we'll get right back to you.</p>
      </div>

    </Layout>
  )
}
