import { Link, useRouter } from "blitz"
import classNames from "classnames"
import { FC } from "react"

const links = [
  { value: "home", label: "Home" },
  { value: "about", label: "About" },
  { value: "projects", label: "Projects" },
  { value: "blog", label: "Articles" },
  { value: "contact", label: "Contact" },
]

interface SectionProps {
  id: string
  hasImage?: boolean
  className?: string
}

const Section: FC<SectionProps> = ({ id, hasImage = false, children, className: classes }) => {
  const imageClasses = {
    "section-image": hasImage,
    "h-screen": hasImage,
  }
  return (
    <section
      id={id}
      className={classNames(
        "flex flex-col flex-wrap justify-center w-full max-w-7xl relative z-10",
        imageClasses
      )}
    >
      <article className={classNames("px-8", classes)}>{children}</article>
    </section>
  )
}

export default Section
