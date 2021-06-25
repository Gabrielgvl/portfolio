import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import classNames from "classnames"
import { FC, useState } from "react"
import Navbar from "../Navbar"
import { Image } from "blitz"
import { SocialIcon } from "react-social-icons"

import MyFace from "../../assets/Khale-face.png"

const links = [
  { value: "home", label: "Home" },
  { value: "about", label: "About" },
  { value: "projects", label: "Projects" },
  { value: "blog", label: "Articles" },
  { value: "contact", label: "Contact" },
]

const Footer: FC = () => {
  return (
    <footer className="flex w-full justify-between items-center main-bg p-8">
      <div>Gabriel Vinhaes</div>
      <div className="flex gap-4">
        <SocialIcon url="https://github.com/Gabrielgvl" fgColor="white" />
        <SocialIcon
          url="https://www.linkedin.com/in/gabriel-vinhaes-736a9811b/?locale=en_US"
          fgColor="white"
        />
        <SocialIcon url="https://twitter.com/kvlao" fgColor="white" />
        <SocialIcon url="https://www.instagram.com/kvlao/" fgColor="white" />
      </div>
      <div>copyright</div>
    </footer>
  )
}

export default Footer
