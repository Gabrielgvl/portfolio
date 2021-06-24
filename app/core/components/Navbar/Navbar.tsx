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

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = () => {
  const query = useRouter()

  return (
    <nav className={"md:flex hidden items-center justify-evenly w-1/2 xl:w-4/12"}>
      {links.map((link) => (
        <Link key={link.value} href={"#" + link.value}>
          <a
            className={classNames(
              "h-full flex items-center relative focus-visible:bg-gray-200 focus-visible:animate-pulse navlink",
              {
                "--active": query.asPath.includes(link.value),
              }
            )}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
