import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import classNames from "classnames"
import { FC, useState } from "react"
import Navbar from "../Navbar"
import { Image } from "blitz"
import MiddlewayLogo from "app/core/assets/middlewayIcon.png"

const Card: FC = () => {
  const [mouseOver, setMouseOver] = useState(false)

  const textClasses = {
    "-translate-y-4": mouseOver,
  }

  const detailClasses = {
    "opacity-0": !mouseOver,
    "opacity-100": mouseOver,
    ...textClasses,
  }

  return (
    <div
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className="flex flex-col rounded bg-gray-900 justify-end items-center h-96 relative hover:-translate-y-4 transform-gpu transition-all duration-500 drop-shadow-lg"
    >
      <Image
        className="transform-gpu hover:scale-100"
        src={MiddlewayLogo}
        alt="Middleway"
        layout="fill"
        objectFit="scale-down"
        objectPosition="center"
      />
      <a
        href="/"
        className="absolute rounded h-full w-full opacity-0 hover:opacity-100 bg-gradient-to-t from-orange to-transparent transform-gpu transition-all duration-500"
      />
      <header
        className={classNames(
          textClasses,
          "text-center transform-gpu duration-500 z-10 pointer-events-none"
        )}
      >
        <h4 className="text-lg ">Citara</h4>
        <h3 className="text-2xl z-10">Middleway</h3>
      </header>
      <p
        className={classNames(
          detailClasses,
          "transition-all z-10 pointer-events-none transform-gpu duration-500 text-center px-4 line-clamp-2"
        )}
      >
        Um grande texto para testar oq acontece quando a gente transa transa transa transatransa
        transatransa transatransa transatransa transatransa transatransa transa
      </p>
    </div>
  )
}

export default Card
