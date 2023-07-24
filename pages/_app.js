import Head from 'next/head'
import PlausibleProvider from 'next-plausible'
import { Roboto_Flex } from 'next/font/google'

import '@/styles/styles.css'

const roboto = Roboto_Flex({
    variable: '--primary-font',
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap',
})

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider
            domain='jamiesonroberts.com'
            trackOutboundLinks={true}
        >
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='shortcut icon' href='/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#4863a9'
                />
                <meta name='msapplication-TileColor' content='#ffffff' />

                <meta
                    name='theme-color'
                    content='#F7F7F7'
                    media='(prefers-color-scheme: light)'
                />
                <meta
                    name='theme-color'
                    content='#1C1C1B'
                    media='(prefers-color-scheme: dark)'
                />
            </Head>
            <style jsx global>{`
                :root {
                    --roboto: ${roboto.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
