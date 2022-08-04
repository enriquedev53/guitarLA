import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const nosotros = () => {
  return (
    <div className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>

            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='nosotros image'></Image>

            <div>
              <p>Astvria es un grupo musical que mezcla la música popular mexicana con rock alternativo, búscando darle su toque personal.</p>
              <p>El nombre de Astvria surge de la ciudad en España llamada Asturias y la obra en guitarra clásica del mismo nombre; Ambas están llenas de historias y de sentimientos dentro de sí, al igual que la banda y de cada uno de los integrantes que la conforman.</p>
              <p>El trabajo que se tiene y que se requiere dar a conocer ha llegado a ser influenciado por bandas como: Javier Solis, José José, Silvio Rodríguez, Café Tacvba, Caifanes, Soda Stereo, The Beatles, Coldplay, Queen, Led Zeppelin, Iron Maiden, etc.</p>
              <p>Con diversas presentaciones en el Estado de México y Área Metropólitana, destacan eventos realizados por los planteles de la Universidad Autónoma del Estado de México (UAEM) y el Festival Agua Blanca que se lleva a cabo cada año.</p>
            </div>
          </div>
      </div>
  )
}

export default nosotros