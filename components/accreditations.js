import { Image } from "react-datocms"
import Fade from "react-reveal/Fade"

export default function Accreditations({ content }) {
  // let fadeDelay = 500
  // function incrementDelay(){
  //   fadeDelay = fadeDelay + 500
  // }
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full gap-10 p-8 my-16 space-y-8 lg:gap-40">
      {content.map((item,key) => (
        <Fade key={key} delay={200}>
        {/* {incrementDelay()} */}
        <div className="max-w-56">
          {item.format == "svg" ? (
            <img src={item.url} className="w-full h-auto" />
          ) : (
            <Image
              data={item.responsiveImage}
              lazyLoad="true"
              className="w-full h-auto"
              pictureClassName="w-full h-auto"
            />
          )}
        </div>
        </Fade>
      ))}
    </div>
  )
}
