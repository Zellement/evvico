import { FaPhoneAlt } from "react-icons/fa"

export default function Phone() {
  return (
    <a className="flex flex-row items-center space-x-2" href="tel:0115 000 0000"><FaPhoneAlt className="text-sm text-blue-100" /> <span>0115 000 0000</span></a>
  )
}