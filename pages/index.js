import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import FancyLink from '../components/fancyLink'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import CardsChargingPoints from '../components/cards--charging-points'

export default function Home() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Evvico - Electric Vehicle Chargers for home, workplace and public spaces</title>
          <meta
          name="Electric Vehicle Chargers for home, workplace and public spaces"
          content="Electric Vehicle Chargers for home, workplace and public spaces"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="container mb-12 md:mb-16 xl:mb-24"
      >
          <motion.div variants={fade}>
            <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">Home Page</h1>
            <div className="max-w-3xl mb-4 content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

              <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
            <FancyLink destination="/about" a11yText="Navigate to the about page" label="About Page" />
          </motion.div>
      </motion.div>

      <CardsChargingPoints />

      <Footer />
    </Layout>
  )
}
