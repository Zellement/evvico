import Link from "next/link"
import Image from "next/image"

import { useState } from "react"
import cn from "classnames"

import Email from "./atoms/email"
import Phone from "./atoms/phone"
import WhatsApp from "./atoms/whatsapp"
import ReactCountryFlag from "react-country-flag"

import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  return (
    <>
      <div className="fixed top-0 left-0 z-40 hidden w-full p-4 text-white bg-black lg:block">
        <div className="container flex items-center justify-end space-x-4 xl:space-x-8">
          <div className="">
            <Email className="hover:text-blue-100 focus:text-blue-100"  />
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
      </div>
      <header className="container py-4 mb-4 md:mb-6 xl:mb-8 lg:mt-28">
          <div className="flex flex-wrap xl:flex-row xl:flex-nowrap lg:py-6">
            <Link href="/">
              <a
                aria-label="Go to the homepage"
                className="max-w-full mx-auto mt-8 w-72 lg:w-84 xl:mx-0 xl:my-auto xl:w-96"
              >
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
                "fixed top-0 bg-black lg:bg-transparent lg:text-black text-white w-full h-screen overflow-y-auto z-30 p-8 text-lg transform transition-300 lg:left-auto lg:relative lg:top-auto lg:h-auto lg:p-0",
                mobileMenuIsOpen ? `left-0` : `-left-full`
              )}
            >
              <button
                className="absolute top-0 right-0 z-50 flex items-center p-4 mt-4 mr-4 space-x-2 text-black bg-blue-100 lg:hidden"
                onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
              >
                <IoMdClose className="" /> <span>Close</span>
              </button>
              <nav>
                <ul className="flex flex-col w-9/12 lg:w-auto lg:flex-row lg:justify-center xl:justify-end lg:space-x-6 xl:space-x-8 2xl:space-x-12">
                  <li className="lg:flex">
                    <Link href="/">
                      <a className="block py-3 leading-tight border-b border-gray-800 lg:flex lg:flex-col lg:border-white hover:border-blue lg:tracking-tight lg:self-end">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="lg:flex">
                    <Link href="/home-ev-chargers">
                      <a className="block py-3 leading-tight border-b border-gray-800 lg:flex lg:flex-col lg:border-white hover:border-blue lg:tracking-tight lg:self-end">
                        <span className="block text-sm text-blue-100 lg:text-blue">
                          Charging Points
                        </span>{" "}
                        for the Home
                      </a>
                    </Link>
                  </li>
                  <li className="lg:flex">
                    <Link href="/work-ev-chargers">
                      <a className="block py-3 leading-tight border-b border-gray-800 lg:flex lg:flex-col lg:border-white hover:border-blue lg:tracking-tight lg:self-end">
                        <span className="block text-sm text-blue-100 lg:text-blue">
                          Charging Points
                        </span>{" "}
                        for the Workplace
                      </a>
                    </Link>
                  </li>
                  <li className="lg:flex">
                    <Link href="/public-ev-chargers">
                      <a className="block py-3 leading-tight border-b border-gray-800 lg:flex lg:flex-col lg:border-white hover:border-blue lg:tracking-tight lg:self-end">
                        <span className="block text-sm text-blue-100 lg:text-blue">
                          Charging Points
                        </span>{" "}
                        for Public Spaces
                      </a>
                    </Link>
                  </li>
                  <li className="lg:flex">
                    <Link href="/faqs">
                      <a className="block py-3 leading-tight border-b border-gray-800 lg:flex lg:flex-col lg:border-white hover:border-blue lg:tracking-tight lg:self-end">
                        FAQs
                      </a>
                    </Link>
                  </li>
                  <li className="lg:flex">
                    <Link href="/why-choose-us">
                      <a className="block py-3 leading-tight border-b border-gray-800 lg:flex lg:flex-col lg:border-white hover:border-blue lg:tracking-tight lg:self-end">
                        Why Choose Us?
                      </a>
                    </Link>
                  </li>
                  <li className="lg:flex">
                    <Link href="/about-us">
                      <a className="block py-3 leading-tight border-b border-gray-800 lg:flex lg:flex-col lg:border-white hover:border-blue lg:tracking-tight lg:self-end">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li className="mt-8 lg:flex">
                    <Link href="/make-an-enquiry">
                      <a className="block p-4 leading-tight text-black bg-blue-100 hover:bg-blue-700 lg:flex lg:flex-col lg:border-white lg:bg-blue lg:text-white hover:border-blue lg:tracking-tight lg:self-end">
                        Make an Enquiry
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </header>
      <div className="fixed bottom-0 left-0 z-40 flex flex-row items-center justify-between w-full text-white bg-black lg:hidden">
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
