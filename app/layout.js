import Image from 'next/image'
import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'
import { Roboto_Flex } from 'next/font/google'

import Header from '@/components/Header'
import StructuredData from '@/components/StructuredData'

import '@/components/_globals/globals.css'
import styles from './layout.module.css'

const roboto = Roboto_Flex({
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap',
})

export const metadata = {
    metadataBase: new URL('https://jamiesonroberts.com'),
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '32x32' },
            { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#F7F7F7' },
        { media: '(prefers-color-scheme: dark)', color: '#1C1C1B' },
    ],
}

export default function RootLayout({ children }) {
    return (
        <html lang='en-CA' className={roboto.className}>
            <CloudflareWebAnalyticsProvider
                token={'d6c73f9f91084e9db1cb887915cef431'}
            />
            <body className={styles.layout}>
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
            </body>
        </html>
    )
}
