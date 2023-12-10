import Image from 'next/image'

import Header from '@/components/Header'
import StructuredData from '@/components/StructuredData'

import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.wrapper}>
        <Header />
      </header>
      <main className={styles.wrapper}>{children}</main>
      <footer className={`${styles.wrapper} ${styles.footer}`}>
        <p>Copyright &copy; 2023 Jamieson Roberts.</p>
        <Image
          src={'/jr-badge.png'}
          alt='A blue circle with the letters JR in white.'
          width={75}
          height={75}
          sizes={'75px'}
        />
      </footer>
      <StructuredData />
    </>
  )
}
