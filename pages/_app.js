import PlausibleProvider from 'next-plausible'
import { Roboto_Flex } from '@next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '/styles/styles.css'

const roboto = Roboto_Flex({
    variable: '--primary-font',
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap',
})

config.autoAddCss = false
const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider
            domain='jamiesonroberts.com'
            trackOutboundLinks={true}
        >
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
