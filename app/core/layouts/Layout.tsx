import { ReactNode } from "react"
import { Head } from "blitz"
import Header from "../components/Header"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "portfolio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <footer>oi</footer>
    </>
  )
}

export default Layout
