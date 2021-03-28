import Image from "next/image"
import Link from "next/link"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { MdStarBorder } from "react-icons/md"
import Fade from "react-reveal/Fade"

export default function QuickLinks() {
  return (
    <div className="flex w-full py-16 bg-blue-500 md:pt-0 mt-72">
      <div className="container flex">
        <ul className="flex flex-col gap-10 md:flex-row md:-mt-48">
          <Fade delay={250}><li className="flex flex-1">
            <Link href="/about-us">
              <a className="flex flex-col items-center justify-center flex-1 p-12 font-bold text-center bg-white border-8 border-blue-100 hover:border-blue-300 focus:border-blue-200 lg:px-16 xl:px-20">
                <div className="mb-8 max-w-40">
                  <Image
                    responsive
                    className=""
                    width="141"
                    height="142"
                    src="/ev-round-icon.png"
                  />
                </div>
                Learn more about Evvico &raquo;
              </a>
            </Link>
          </li></Fade>
          <Fade delay={500}><li className="flex flex-1">
            <Link href="/faqs">
              <a className="flex flex-col items-center justify-center flex-1 p-12 font-bold text-center bg-white border-8 border-blue-100 hover:border-blue-300 focus:border-blue-200 lg:px-16 xl:px-20">
                <div className="flex w-40 h-40 p-8 mb-8 bg-blue-500 rounded-full">
                  <AiOutlineQuestionCircle className="m-auto text-5xl text-white" />
                </div>
                Read our <span className="block">FAQs &raquo;</span>
              </a>
            </Link>
          </li></Fade>
          <Fade delay={750}><li className="flex flex-1">
            <Link href="/faqs">
              <a className="flex flex-col items-center justify-center flex-1 p-12 font-bold text-center bg-white border-8 border-blue-100 hover:border-blue-300 focus:border-blue-200 lg:px-16 xl:px-20">
                <div className="flex w-40 h-40 p-8 mb-8 bg-blue-500 rounded-full">
                  <MdStarBorder className="m-auto text-5xl text-white" />
                </div>
                Why choose <span className="block">Evvico?</span>
              </a>
            </Link>
          </li></Fade>
        </ul>
      </div>
    </div>
  )
}
