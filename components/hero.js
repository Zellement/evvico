import { Image } from "react-datocms"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import { fade } from "../helpers/transitions"
import { motion } from "framer-motion"

export default function Hero({ heroImage, heroPrimary, heroSecondary }) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className="flex"
    >
      <motion.div variants={fade}>
        <div className="relative flex flex-col mb-40 md:flex-row">
          <div className="h-96 md:h-auto md:w-2/3 md:relative xl:w-3/5 xl:max-h-[500px]">
            <Image
              data={heroImage.responsiveImage}
              lazyLoad="false"
              className="object-cover w-full h-full md:z-20"
              pictureClassName="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue -z-10 md:-mb-8 md:-mr-8 md:z-10"></div>
          </div>
          <div className="flex p-4 md:p-0 md:mt-20 md:-mb-20 md:w-1/3 xl:w-2/5 ">
            <div className="relative w-full p-10 -mt-32 text-white bg-black md:m-0 xl:p-20 ">
              <Slide left>
                <span className="block mb-10 text-3xl font-bold leading-tight bg-black md:-ml-40 md:p-12 md:text-4xl xl:text-5xl md:z-30 md:relative xl:p-20 xl:max-w-[700px]">
                  {heroPrimary}
                </span>
              </Slide>
              <Fade delay={1000}>
                <span className="block text-2xl leading-tight text-blue-100 md:text-3xl md:p-8 md:max-w-[300px] md:mx-auto xl:text-4xl xl:max-w-[400px] md:pl-16">
                  {heroSecondary}
                </span>
              </Fade>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
