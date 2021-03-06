import { Head, BlitzLayout } from "blitz"
import Navbar from "./../components/Navbar"
import PageLayout from "./Page"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Systems Cost Repository"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <PageLayout>{children}</PageLayout>
    </>
  )
}

export default Layout
