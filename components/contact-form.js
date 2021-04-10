export default function ContactForm() {
  return (
    <div className="py-24 text-white bg-blue-600">
      <div className="container max-w-screen-lg">
        <h2 className="mb-16 text-2xl text-center text-blue-100 lg:text-4xl">Start your enquiry</h2>

        <form
          netlify-honeypot="_gotcha" 
          action="/thanks"
          data-netlify="true"
          className="flex flex-wrap gap-8 lg:flex-row"
          name="contact"
          method="POST"
        >
          <div className="hidden">
            <label>
              <span className="block">Do not fill out this field if you are human</span>
              <input name="_gotcha" />
            </label>
          </div>
          <div className="flex flex-col flex-1 space-y-4">
            <label class="w-full p-1 flex flex-col space-y-1">
              <span className="block">Name</span>
              <input
                required
                type="text"
                class="w-full"
                name="name"
                placeholder="e.g. Jane Doe"
              />
            </label>
            <label class="w-full p-1 flex flex-col space-y-1">
              <span className="block">Email</span>
              <input
                required
                type="email"
                className="w-full"
                name="email"
                placeholder="e.g. janedoe@gmail.com"
              />
            </label>
            <label class="w-full p-1 flex flex-col space-y-1">
              <span className="block">Telephone</span>
              <input
                required
                type="tel"
                class="w-full"
                name="telephone"
                placeholder="e.g. 07700 000 000"
              />
            </label>
            <label class="w-full p-1 flex flex-col space-y-1">
              <span className="block">Postcode</span>
              <input
                required
                type="text"
                class="w-full"
                name="postcode"
                placeholder="e.g. NG1 7HT"
              />
            </label>
          </div>
          <div className="flex flex-col flex-1 space-y-4">
            <label class="w-full p-1 flex flex-col space-y-1">
              <span className="block">
                Best time to call between 9am and 7pm
              </span>
              <input
                required
                type="text"
                class="w-full"
                name="best_time"
                placeholder="e.g. 9:30am"
              />
            </label>
            <label class="w-full p-1 flex flex-col space-y-1">
              <span className="block">Vehicle make & model</span>
              <input
                required
                type="text"
                class="w-full"
                name="vehicle"
                placeholder="e.g. Tesla Model S"
              />
            </label>
            <label class="w-full p-1 flex flex-col space-y-1">
              <span className="block">Charger type</span>
              <input
                className="w-full"
                required
                type="text"
                name="charger"
                placeholder="e.g. Type 2 standard"
              />
            </label>
            <label class="w-full p-1 flex flex-col space-y-1">
              <span className="block">Further comments</span>
              <input
                required
                type="text"
                class="w-full"
                name="comments"
                placeholder="Anything you wish to add?"
              />
            </label>
          </div>
          <div class="w-full p-1 flex flex-col space-y-1 mt-4">
            <input
              type="submit"
              class="transition duration-300 text-black self-end cursor-pointer bg-white hover:text-white focus:text-white focus:bg-black hover:bg-black"
              value="Send Enquiry"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
