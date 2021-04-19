import { FaPhoneAlt } from "react-icons/fa"

export default function Phone( { classes } ) {
  return (
    <a className={"flex flex-row items-center space-x-2 hover:text-blue-100 " + classes } href="tel:01157751060"><FaPhoneAlt className="text-sm text-blue-100" /> <span>0115 775 1060</span></a>
  )
}