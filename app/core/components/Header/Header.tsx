import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import classNames from "classnames"
import { FC, useState } from "react"
import Navbar from "../Navbar"
import { Image } from "blitz"

import MyFace from "../../assets/Khale-face.png"

const links = [
  { value: "home", label: "Home" },
  { value: "about", label: "About" },
  { value: "projects", label: "Projects" },
  { value: "blog", label: "Articles" },
  { value: "contact", label: "Contact" },
]

const Header: FC = () => {
  const [isTop, setTop] = useState(window.scrollY === 0)
  useScrollPosition(({ currPos }) => {
    setTop(currPos.y === 0)
  }, [])

  const classes = {
    "bg-orange": !isTop,
    "h-16": isTop,
    "h-12": !isTop,
  }

  return (
    <header
      className={classNames("flex fixed w-full top-0 transition-all duration-500 z-50", classes)}
    >
      <button
        type="button"
        onClick={(ev) => {
          ev.preventDefault()
          console.debug(ev)
        }}
        className="flex ml-4 self-center items-center justify-center h-8 w-8 rounded-full
        hover:bg-gray-200 focus-visible:bg-gray-200 focus-visible:animate-pulse
        active:bg-gray-200 active:animate-pulse"
      >
        <span className="material-icons">menu</span>
      </button>
      <Navbar />
    </header>
  )
}

export default Header
