import Fade from "react-reveal/Fade"
import Phone from "../components/atoms/phone"
import WhatsApp from "../components/atoms/whatsapp"

export default function ContactForm() {
  return (
    <div className="py-24 text-white bg-blue-600 ">
      <div className="container max-w-screen-lg">
        <h2 className="mb-8 text-2xl text-center text-blue-100 lg:text-4xl">
          Start your enquiry
        </h2>

        <Fade>
          <div className="mb-8 text-center">
            <p className="flex flex-row justify-center space-x-2 text-xl">
              <span>Call us on</span> <Phone classes=" " />
            </p>
            <p className="flex flex-row justify-center space-x-2 text-lg">
              <span>Or contact us via</span> <WhatsApp />
            </p>
          </div>

          <form
            netlify-honeypot="_gotcha"
            action="/thanks"
            data-netlify="true"
            className="flex flex-col flex-wrap gap-8 md:flex-row"
            name="contact"
            method="POST"
          >
            <div className="hidden">
              <input type="hidden" name="form-name" value="contact" />
              <label>
                <span className="block">
                  Do not fill out this field if you are human
                </span>
                <input name="_gotcha" />
              </label>
            </div>
            <div className="flex flex-col flex-1 space-y-4">
              <label className="flex flex-col w-full p-1 space-y-1">
                <span className="block">Name</span>
                <input
                  required
                  type="text"
                  className="w-full"
                  name="name"
                  placeholder="e.g. Jane Doe"
                />
              </label>
              <label className="flex flex-col w-full p-1 space-y-1">
                <span className="block">Email</span>
                <input
                  required
                  type="email"
                  className="w-full"
                  name="email"
                  placeholder="e.g. janedoe@gmail.com"
                />
              </label>
              <label className="flex flex-col w-full p-1 space-y-1">
                <span className="block">Telephone</span>
                <input
                  required
                  type="tel"
                  className="w-full"
                  name="telephone"
                  placeholder="e.g. 07700 000 000"
                />
              </label>
              <label className="flex flex-col w-full p-1 space-y-1">
                <span className="block">Postcode</span>
                <input
                  required
                  type="text"
                  className="w-full"
                  name="postcode"
                  placeholder="e.g. NG1 7HT"
                />
              </label>
            </div>
            <div className="flex flex-col flex-1 space-y-4">
              <label className="flex flex-col w-full p-1 space-y-1">
                <span className="block">
                  Best time to call between 9am and 7pm
                </span>
                <input
                  required
                  type="text"
                  className="w-full"
                  name="best_time"
                  placeholder="e.g. 9:30am"
                />
              </label>
              <label className="flex flex-col w-full p-1 space-y-1">
                <span className="block">Vehicle make & model</span>
                <input
                  required
                  type="text"
                  className="w-full"
                  name="vehicle"
                  placeholder="e.g. Tesla Model S"
                />
              </label>
              <label className="flex flex-col w-full p-1 space-y-1">
                <span className="block">Charger type</span>
                <input
                  className="w-full"
                  required
                  type="text"
                  name="charger"
                  placeholder="e.g. Type 2 standard"
                />
              </label>
              <label className="flex flex-col w-full p-1 space-y-1">
                <span className="block">Further comments</span>
                <input
                  required
                  type="text"
                  className="w-full"
                  name="comments"
                  placeholder="Anything you wish to add?"
                />
              </label>
            </div>
            <div className="flex flex-col w-full p-1 mt-4 space-y-1">
              <input
                type="submit"
                className="self-end text-black transition duration-300 bg-white cursor-pointer hover:text-white focus:text-white focus:bg-black hover:bg-black"
                value="Send Enquiry"
              />
            </div>
          </form>
        </Fade>
      </div>
    </div>
  )
}
