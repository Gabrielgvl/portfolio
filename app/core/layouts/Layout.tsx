import { ReactNode } from "react"
import { Head } from "blitz"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
      <Footer />
    </>
  )
}

export default Layout
