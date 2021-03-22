import Email from "./atoms/email"
import Phone from "./atoms/phone"
import WhatsApp from "./atoms/whatsapp"
import ReactCountryFlag from "react-country-flag"

export default function Footer() {
  return (
    <footer className="py-8 text-base text-white bg-black lg:py-16">
      <div className="container flex flex-col space-y-8">
        <div className="flex items-center justify-center space-x-4 lg:justify-start">
          <div className="">
            <Email className="hover:text-blue-100 focus:text-blue-100" />
          </div>
          <div className="flex flex-row px-2 space-x-1">
            <ReactCountryFlag
              alt="UK flag"
              title="UK flag"
              aria-label="UK flag"
              countryCode="GB"
              style={{
                fontSize: "1.4em",
                lineHeight: "2em",
                marginRight: "2px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              svg
            />
            <ReactCountryFlag
              alt="Polish flag"
              title="Polish flag"
              aria-label="Polish flag"
              countryCode="PL"
              style={{
                fontSize: "1.4em",
                lineHeight: "2em",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              svg
            />
          </div>
          <div className="">
            <WhatsApp />
          </div>
          <div className="">
            <Phone />
          </div>
        </div>
        <div className="">
          Evvico is a trading name of Effico Ltd., a registered company in
          England & Wales &bull; Registration Number 10890810 &bull; VAT Number
          277 6031 88
        </div>
        <div className="">
          <a rel="noreferrer noopener" className="hover:text-blue-100 focus:text-blue-100" target="_blank" href="https://www.zellement.com">Web Design by Zellement</a>
        </div>
      </div>
    </footer>
  )
}
