import { Image } from "react-datocms"
import { request } from "../lib/datocms"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import Head from "next/head"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import CardsChargingPoints from "../components/cards--charging-points"
import Hero from "../components/hero"

const HOMEPAGE_QUERY = `
  query MyQuery {
    homepage {
      heroPrimary
      heroSecondary
      heroImage {
        responsiveImage(imgixParams: { fit: crop, w: 1600, h: 800, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
      section1Copy
      section1Strapline
      section1Image {
        responsiveImage(imgixParams: { fit: crop, w: 640, h: 343, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  })
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <Layout>
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
        heroPrimary={data.homepage.heroPrimary}
        heroSecondary={data.homepage.heroSecondary}
        heroImage={data.homepage.heroImage}
      />

      <div className="container flex py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row xl:space-x-16">
          <div className="flex flex-col lg:flex-row lg:w-1/2 xl:w-3/4">
            <Slide left>
              <div className="relative h-96 sm:h-[300px] md:h-[400px] lg:h-auto lg:w-full lg:h-auto bg-gray-100">
                <Image
                  data={data.homepage.section1Image.responsiveImage}
                  lazyLoad="false"
                  className="object-cover w-full h-full py-16"
                  pictureClassName="object-cover w-full h-full lg:object-contain"
                />
              </div>
            </Slide>
            <div className="flex p-4 lg:w-2/3 lg:p-0 xl:w-2/5">
              <div className="relative z-20 flex p-8 -mt-10 lg:m-0 lg:-ml-40 xl:-ml-96 xl:p-0">
                <Slide right>
                  <span className="relative z-20 text-2xl font-bold leading-tight text-blue-700 lg:my-auto xl:text-4xl xl:pl-20">{data.homepage.section1Strapline}</span>
                </Slide>
                <span className="absolute bottom-0 left-0 z-10 w-1/2 h-full bg-blue-100 lg:top-1/2 lg:-translate-y-1/2 transform lg:h-[80%] xl:w-2/3"></span>
              </div>
            </div>
          </div>
          <Fade><div className="p-4 content lg:w-1/2 lg:my-auto" dangerouslySetInnerHTML={{ __html: data.homepage.section1Copy }} /></Fade>
        </div>
      </div>

      <CardsChargingPoints />

      <Footer />
    </Layout>
  )
}
