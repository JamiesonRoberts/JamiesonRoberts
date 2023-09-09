import Image from 'next/image'
import { Roboto_Flex } from 'next/font/google'
import PlausibleProvider from 'next-plausible'

import Header from '@/components/Header'
import StructuredData from '@/components/StructuredData'

import '@/components/_globals/globals.css'
import styles from './layout.module.css'

const roboto = Roboto_Flex({
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang='en-CA' className={roboto.className}>
            <PlausibleProvider
                domain='jamiesonroberts.com'
                trackOutboundLinks={true}
            />
            <body>
                <div className={styles.layout}>
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
                </div>
                <StructuredData />
            </body>
        </html>
    )
}
