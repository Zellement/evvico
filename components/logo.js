import { motion } from "framer-motion"

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
}
const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1],
  },
}

export default function Logo() {
  return (
    <motion.svg
      variants={container}
      initial="hidden"
      animate="visible"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 546.7 183.9"
    >
      <defs />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#002543"
        d="M70.8 158.7c-22.7-13.2-38-37.7-38-65.8 0-16.5 5.3-31.8 14.3-44.3l-2-20L23.3 32C11 49.2 3.8 70.2 3.8 92.9c0 38.1 20.4 71.5 50.8 89.9l16.2-24.1z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#A7A4A3"
        d="M94.6 0C69 0 46 12.1 30 31.4l11.3-1.8L43 46.3c12.5-16.4 31-26.8 51.6-26.8 25.4 0 47.5 15.7 59.2 39l18-7.6C157.1 20.6 128 0 94.6 0z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#002543"
        d="M74.6 99.2c1 4.3 3.2 8.1 6.6 11.4 4.9 4.9 10.8 7.3 17.7 7.3 6.9 0 12.8-2.4 17.7-7.3l.1-.1 13.3 13.3-.1.1c-8.5 8.5-18.9 12.8-31 12.8-12.1 0-22.5-4.3-31-12.8s-12.8-18.9-12.8-31c0-12.1 4.3-22.5 12.8-31s18.9-12.8 31-12.8c12.1 0 22.5 4.3 31 12.8s12.8 18.9 12.8 31c0 2.1-.2 4.2-.6 6.3H74.6zm46-18.8c-1-1.8-2.4-3.6-4-5.2-4.9-4.9-10.8-7.3-17.7-7.3-6.9 0-12.8 2.4-17.7 7.3-1.6 1.6-3 3.4-4 5.2h43.4z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#002543"
        d="M150 50.8h22.4l21.5 43.8 21.7-43.8h22.1l-43.8 87.6L150 50.8z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#002543"
        d="M240.2 50.8h22.4L284 94.6l21.7-43.8h22.1L284 138.4l-43.8-87.6z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#002543"
        d="M349.1 50.8v87.6h-18.8V50.8h18.8zm-9.4-6.3c-2.6 0-4.8-.9-6.7-2.7-1.8-1.8-2.7-4-2.7-6.7 0-2.6.9-4.8 2.7-6.7 1.8-1.8 4-2.7 6.7-2.7 2.6 0 4.8.9 6.7 2.7 1.8 1.8 2.7 4 2.7 6.7 0 2.6-.9 4.8-2.7 6.7-1.9 1.8-4.1 2.7-6.7 2.7z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#4D4744"
        d="M437.3 123c-7.1 4.2-15.3 6.6-24.1 6.6-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5c8.9 0 17.3 2.5 24.4 6.8l6.5-6.5c-8.9-5.8-19.5-9.2-31-9.2-31.2 0-56.5 25.3-56.5 56.5s25.3 56.5 56.5 56.5c11.3 0 21.8-3.3 30.6-9l-6.4-6.7z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#4D4744"
        d="M490.6 26.2c-31 0-56.2 25.1-56.2 56.2 0 31 25.1 56.2 56.2 56.2 31 0 56.2-25.1 56.2-56.2-.1-31-25.2-56.2-56.2-56.2m0 9c26 0 47.2 21.2 47.2 47.2 0 26-21.2 47.2-47.2 47.2-26 0-47.2-21.2-47.2-47.2 0-26 21.2-47.2 47.2-47.2"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#014A7B"
        d="M67 159.7C44.3 146.6 29 122 29 94c0-16.5 5.3-31.8 14.3-44.3l-2-20-21.8 3.4C7.2 50.2 0 71.3 0 94c0 38.1 20.4 71.5 50.8 89.9L67 159.7z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#014A7B"
        d="M73.4 97.4c1 4.3 3.2 8.1 6.6 11.4 4.9 4.9 10.8 7.3 17.7 7.3 6.9 0 12.8-2.4 17.7-7.3l.1-.1 13.3 13.3-.1.1c-8.5 8.5-18.9 12.8-31 12.8-12.1 0-22.5-4.3-31-12.8s-12.8-18.9-12.8-31c0-12.1 4.3-22.5 12.8-31s18.9-12.8 31-12.8c12.1 0 22.5 4.3 31 12.8s12.8 18.9 12.8 31c0 2.1-.2 4.2-.6 6.3H73.4zm46-18.7c-1-1.8-2.4-3.6-4-5.2-4.9-4.9-10.8-7.3-17.7-7.3-6.9 0-12.8 2.4-17.7 7.3-1.6 1.6-3 3.4-4 5.2h43.4z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#014A7B"
        d="M148.4 49.1h22.4l21.4 43.8L214 49.1h22.1l-43.9 87.7-43.8-87.7z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#014A7B"
        d="M238.6 49.1H261l21.4 43.8 21.7-43.8h22.1l-43.8 87.7-43.8-87.7z"
      />
      <motion.path
        variants={item}
        transition={{ ease: "easeOut", duration: 2 }}
        fill="#014A7B"
        d="M347.5 49.1v87.6h-18.8V49.1h18.8zm-9.4-6.2c-2.6 0-4.8-.9-6.7-2.7-1.8-1.8-2.7-4-2.7-6.7 0-2.6.9-4.8 2.7-6.7 1.8-1.8 4-2.7 6.7-2.7 2.6 0 4.8.9 6.7 2.7 1.8 1.8 2.7 4 2.7 6.7 0 2.6-.9 4.8-2.7 6.7-1.9 1.7-4.1 2.7-6.7 2.7z"
      />
    </motion.svg>
  )
}
