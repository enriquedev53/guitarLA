import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const nosotros = () => {
  return (
    <Layout 
    pagina='Nosotros'>
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>

            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='nosotros image'></Image>

            <div>
              <p>In et ornare nunc. Phasellus nec ultricies erat. Nullam id tempus nunc. Curabitur sem massa, vestibulum nec orci vel, auctor pellentesque leo. Morbi nunc velit, pretium ac mauris vel, eleifend mattis erat. Vivamus elementum scelerisque lorem a vehicula. Cras a volutpat nisl. Maecenas gravida scelerisque bibendum.</p>
              <p>Morbi nunc velit, pretium ac mauris vel, eleifend mattis erat. Vivamus elementum scelerisque lorem a vehicula. In et ornare nunc. Phasellus nec ultricies erat. Nullam id tempus nunc. Curabitur sem massa, vestibulum nec orci vel, auctor pellentesque leo. Morbi nunc velit, pretium ac mauris vel, eleifend mattis erat. Vivamus elementum scelerisque lorem a vehicula. Cras a volutpat nisl. Maecenas gravida scelerisque bibendum.</p>
            </div>
          </div>
      </main>
    </Layout>
  )
}

export default nosotros