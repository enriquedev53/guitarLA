import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className='contenedor'>
            <div className={styles.barra}>
                <Link href='/'>
                    <Image width={130} height={130} src='/img/logo.svg' alt='logo'></Image>
                </Link>

                    
                <nav className={styles.navegacion}>
                    <Link href='/'>Incio</Link>
                    <Link href='/nosotros'>Nosotros</Link>
                    <Link href='/musica'>Música</Link>
                    <Link href='/tienda'>Tienda</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header