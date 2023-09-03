import PlausibleProvider from 'next-plausible'
import { Roboto_Flex } from 'next/font/google'

import './globals.css'

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
            <body>{children}</body>
        </html>
    )
}
