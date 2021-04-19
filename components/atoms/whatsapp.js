import React from "react"
import { AiOutlineWhatsApp } from "react-icons/ai"

export default function WhatsApp() {
  return (
    <>
      <a
        className="flex flex-row items-center space-x-2 hover:text-green-300"
        href="https://wa.me/07598069741"
      >
        <AiOutlineWhatsApp className="-mt-1 text-green-300" /> <span>WhatsApp</span>
      </a>
    </>
  )
}
