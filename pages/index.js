import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Inicio.module.css'

export default function Home() {
  return (
    <Layout
    pagina='Inicio'>
      <main className='contenedor'>
        <div className={styles.fondo}>
          <Image layout='responsive' width={300} height={200} src='/img/fondo.jpeg' alt='Foto astvria'></Image>
        </div>
      </main>
    </Layout>
  )
}
