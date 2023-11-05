import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'
import { Roboto_Flex } from 'next/font/google'

import '@/components/_globals/globals.css'

const roboto = Roboto_Flex({
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap',
})

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#F7F7F7' },
        { media: '(prefers-color-scheme: dark)', color: '#1C1C1B' },
    ],
    colorScheme: 'dark light',
}

export const metadata = {
    metadataBase: new URL('https://jamiesonroberts.com'),
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '32x32' },
            { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en-CA' className={roboto.className}>
            <CloudflareWebAnalyticsProvider
                token={'d6c73f9f91084e9db1cb887915cef431'}
            />
            <body>{children}</body>
        </html>
    )
}
