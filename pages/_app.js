import App from 'next/app'
import { Roboto_Flex } from '@next/font/google'

import PlausibleProvider from 'next-plausible'

import '/styles/styles.css'

const roboto = Roboto_Flex({
    variable: '--primary-font',
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap'
})

const SiteLayout = ({ children }) => {
    return (
        <div className={roboto.variable}>
            {children}
        </div>
    )
}

class MyApp extends App {
    render () {
        const {
            Component,
            pageProps
        } = this.props
        return (
            <PlausibleProvider domain='jamiesonroberts.com'
                               trackOutboundLinks={true}>
                <SiteLayout>
                    <Component {...pageProps} />
                </SiteLayout>
            </PlausibleProvider>
        )
    }
}

export default MyApp
