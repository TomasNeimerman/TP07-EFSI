import Link from 'next/link'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/quienes-somos">Quienes Somos</Link></li>
            <li><Link href="/reservas">Reservas</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Citas para Mascotas</p>
      </footer>
    </div>
  )
}

export default Layout
