import App from 'next/app'
import { Roboto } from '@next/font/google'

import PlausibleProvider from 'next-plausible'

import '/styles/styles.css'

class MyApp extends App {
    render () {
        const {
            Component,
            pageProps
        } = this.props
        return (
            <PlausibleProvider domain='jamiesonroberts.com'
                               trackOutboundLinks={true}>
                <Component {...pageProps} />
            </PlausibleProvider>
        )
    }
}

export default MyApp
