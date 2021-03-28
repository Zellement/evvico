import Footer from "../components/footer"
import Accreditations from "../components/accreditations"
import QuickLinks from "../components/cards--quick-links"

export default function Layout({ children, accreditations }) {
  return (
    <>
      {children}
      <Accreditations content={accreditations} />
      <QuickLinks />
      <Footer />
    </>
  )
}