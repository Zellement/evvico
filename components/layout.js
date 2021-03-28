import Footer from "../components/footer"
import Accreditations from "../components/accreditations"
import QuickLinks from "../components/cards--quick-links"
import Head from "next/head"

export default function Layout({ children, accreditations }) {
  return (
    <>
    
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Accreditations content={accreditations} />
      <QuickLinks />
      <Footer />
    </>
  )
}