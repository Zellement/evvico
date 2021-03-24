import Link from "next/link"

export default function CardsChargingPoints() {
  return (
    <ul className="container flex flex-col py-16 space-y-20 lg:py-32 lg:flex-row lg:space-y-0 lg:space-x-4 xl:space-x-8">
      {/* Home */}
      <li className="flex lg:flex-1">
        <Link href="/home-ev-chargers">
          <a className="relative block w-full p-8 py-12 text-white bg-black hover:bg-blue-500 focus:bg-blue-500 lg:px-8 md:px-16 lg:py-16 xl:px-16 xl:py-20 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 97.5 83.4"
              className="absolute top-0 right-0 w-40 mr-4 -mt-16 lg:w-56 xl:w-64 lg:-mt-20"
            >
              <defs />
              <path d="M4.2 58.8v24.6h79.4V55.9L53.8 26.1z"
                className="text-black transition duration-300 fill-current group-focus:text-blue-500 group-hover:text-blue-500" />
              <path
                d="M0 53.6v7.2h23.7l1.1-1.1 29.4-29.4 26.7 26.8v26.3h7.2V64.2l4.4 4.4 5-5.1-16-15.9V33.3h2.9v-7.1H71.6v7.1h2.8v7.1L56.7 22.7l-2.5-2.5-26.1 7.5z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-blue-200 group-hover:text-blue-200"
              />
              <path
                d="M47 55.9h5.6V61.6h-5.7l.1-5.7zm14.5 0v5.7h-5.7V55.9h5.7zm-8.9-2.4v-6c-3 .6-5.3 3-5.8 6h5.8zm3.2-6v6h5.8c-.6-3-2.9-5.4-5.8-6z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-yellow-400 group-hover:text-yellow-400"
              />
              <path
                className="text-white transition duration-300 fill-current group-focus:text-gray-200 group-hover:text-gray-200 animate-pulse"
                d="M91.8 8c0-2.1-1.7-3.9-3.9-3.9-.3 0-.6 0-.9.1.1-.3.2-.6.2-1C87.2 1.4 85.7 0 84 0s-3.2 1.5-3.2 3.2c0 .3.1.6.1.9-1.7.9-2.8 2.7-2.8 4.7v.1c-1.5.9-2.5 2.6-2.5 4.4 0 1.3.5 2.5 1.3 3.4-.2.4-.3.8-.3 1.3 0 .6.2 1.1.5 1.6-.3.4-.5 1-.5 1.5 0 1.4 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6c0-.5-.1-.9-.4-1.3.3-.4.6-.9.7-1.4 1.3-.3 2.5-1.1 3.2-2.2h.1c1.8 0 3.3-1.5 3.3-3.3 0-.4-.1-.8-.2-1.2 1.6 0 3.3-1.7 3.3-3.7z"
              />
            </svg>
            <span className="relative flex flex-col items-start justify-start lg:flex-1 sm:flex-row sm:space-x-2 sm:items-center lg:flex-col lg:items-start lg:space-x-0">
              <span className="flex flex-row items-center justify-start space-x-2">
                <span className="leading-snug">Charging Points</span>
                <span className="leading-snug text-gray-500">for the</span>
              </span>
              <span className="text-5xl font-bold leading-none text-blue-100">
                Home
              </span>
            </span>
          </a>
        </Link>
      </li>
      {/* Workplace */}
      <li className="flex lg:flex-1">
        <Link href="/work-ev-chargers">
          <a className="relative block w-full p-8 py-12 text-white bg-black hover:bg-blue-500 focus:bg-blue-500 lg:px-8 md:px-16 lg:py-16 xl:px-16 xl:py-20 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 75.5 87.6"
              className="absolute top-0 right-0 w-40 mr-4 -mt-4 lg:w-56 lg:-mt-12"
            >
              <defs />
              <path
                d="M0 0v87.6h71.3V20.4H58.6V5.3z"
                className="text-black transition duration-300 fill-current group-focus:text-blue-500 group-hover:text-blue-500"
              />
              <path
                d="M0 0l6.7 7.1h46.6v80.5h7.1V22.2h7.9v55.1h7.1V15h-15V0H0z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-blue-200 group-hover:text-blue-200"
              />
              <path
                d="M37.4 18.1h8v24.8h-8z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-yellow-300 group-hover:text-yellow-300"
              />
              <path
                d="M31.2 42.9h-8.1V18.1h8.1z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-yellow-300 group-hover:text-yellow-300"
              />
            </svg>

            <span className="relative flex flex-col items-start justify-start lg:flex-1 sm:flex-row sm:space-x-2 sm:items-center lg:flex-col lg:items-start lg:space-x-0">
              <span className="flex flex-row items-center justify-start space-x-2">
                <span className="leading-snug">Charging Points</span>
                <span className="leading-snug text-gray-500">for the</span>
              </span>
              <span className="text-5xl font-bold leading-none text-blue-100">
                Workplace
              </span>
            </span>
          </a>
        </Link>
      </li>
      {/* Public Spaces */}
      <li className="flex lg:flex-1">
        <Link href="/public-ev-chargers">
          <a className="relative block w-full p-8 py-12 text-white bg-black lg:px-8 md:px-16 lg:py-16 xl:px-16 xl:py-20 group hover:bg-blue-500 focus:bg-blue-500">
            <svg
              className="absolute top-0 right-0 mr-4 -mt-4 w-72 lg:w-96 lg:-mt-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 167 66.2"
            >
              <defs />
              <path
                d="M160 39L120.3 0H30.2L0 38v28.2h160z"
                className="text-black transition duration-300 fill-current group-hover:text-blue-500 group-focus:text-blue-500"
              />
              <path
                d="M127.3 0H30.2l27.4 39h19.5L106 10.1 134.9 39H167z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-blue-200 group-hover:text-blue-200"
              />
              <path
                d="M111.4 29.7l-3.3 1.5 1.1-4.4-.9-.2-1.4 5.3-.1.3 1 .2v-.2l4-1.7z"
                className="text-blue-100 transition duration-300 fill-current group-hover:text-yellow-400 group-focus:text-yellow-400"
              />
              <path
                d="M107.7 40.4c-4.8 0-8.8-3.9-8.8-8.8s3.9-8.8 8.8-8.8 8.8 3.9 8.8 8.8-4 8.8-8.8 8.8zm0-15.5c-3.7 0-6.8 3-6.8 6.8s3 6.8 6.8 6.8c3.7 0 6.8-3 6.8-6.8s-3.1-6.8-6.8-6.8z"
                className="text-blue-100 transition duration-300 fill-current group-hover:text-yellow-400 group-focus:text-yellow-400"
              />
              <path
                d="M155.5 39.6h8.7v1.8h-8.7z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-blue-200 group-hover:text-blue-200"
              />
              <path
                d="M155.5 53.1h8.7v1.8h-8.7z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-blue-200 group-hover:text-blue-200"
              />
              <path
                d="M156.5 42.4h6.7v9.8h-6.7z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-blue-200 group-hover:text-blue-200"
              />
              <path
                d="M156.5 55.8h6.7v9.8h-6.7z"
                className="text-blue-100 transition duration-300 fill-current group-focus:text-blue-200 group-hover:text-blue-200"
              />
            </svg>

            <span className="relative flex flex-col items-start justify-start lg:flex-1 sm:flex-row sm:space-x-2 sm:items-center lg:flex-col lg:items-start lg:space-x-0">
              <span className="flex flex-row items-center justify-start space-x-2">
                <span className="leading-snug">Charging Points</span>
                <span className="leading-snug text-gray-500">for</span>
              </span>
              <span className="text-5xl font-bold leading-none text-blue-100">
                Public Spaces
              </span>
            </span>
          </a>
        </Link>
      </li>
    </ul>
  )
}
