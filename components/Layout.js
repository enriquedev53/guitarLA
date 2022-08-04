import Head from "next/head"
import Footer from "./Footer"
import Nosotros from './Nosotros';
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
      <Nosotros></Nosotros>
      <Footer></Footer>
    </div>
  )
}

export default Layout