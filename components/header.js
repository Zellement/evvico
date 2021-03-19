import Link from "next/link"
import { useState } from "react"
import cn from "classnames"
import Container from "./container"
import Email from "./atoms/email"
import Image from "next/image"
import ReactCountryFlag from "react-country-flag"
import { HiOutlineMenuAlt2 } from "react-icons/hi"

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  return (
    <>
      <div className="fixed top-0 left-0 items-center justify-end hidden w-full p-4 text-white bg-black lg:flex">
        <div className="">
          <Email />
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
        <div className="">Whatsapp</div>
        <div className="">0115 000 0000</div>
      </div>
      <header className="py-4 mb-4 md:mb-6 xl:mb-8 lg:mt-16">
        <Container>
          <div className="flex flex-wrap">
            <Link href="/">
              <a aria-label="Go to the homepage" className="w-40">
                <Image
                  src="/evvico-logo.png"
                  width={700}
                  height={226}
                  quality={100}
                  priority
                  alt="Evvico Logo"
                />
              </a>
            </Link>
            <div
              className={cn(
                "absolute top-0 bg-black text-white w-full h-screen overflow-y-auto z-30 p-4 text-lg transform transition-300",
                mobileMenuIsOpen ? `left-0` : `-left-full`
              )}
            >
              <button
                className="absolute top-0 right-0 z-50 mt-4 mr-4"
                onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
              >
                Close
              </button>
              <nav>
                <ul className="flex flex-col w-10/12">
                  {[
                    { title: "Home", route: "/" },
                    { title: "About", route: "/about" },
                  ].map(({ route, title }) => (
                    <li className="mt-3 md:mt-0 md:ml-6" key={title}>
                      <Link href={route}>
                        <a className="block text-white">{title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </header>
      <div className="fixed bottom-0 left-0 flex flex-row items-center justify-between w-full text-white bg-black lg:hidden">
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
        <div className="">Whatsapp</div>
        <div className="">0115 000 0000</div>
        <button
          className="flex items-center p-2 space-x-2 text-black bg-blue-100"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <HiOutlineMenuAlt2 className="-mt-1" /> <span>Menu</span>
        </button>
      </div>
    </>
  )
}
