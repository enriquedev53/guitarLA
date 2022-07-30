import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
        <title>Guitar LA | {pagina}</title>
        <meta name="description" content="Sitio Web Astvria" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout