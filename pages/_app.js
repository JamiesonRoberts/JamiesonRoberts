import App from 'next/app'

import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'

import '../styles/styles.css'

class MyApp extends App {
    render () {
        const {
            Component,
            pageProps
        } = this.props
        return (
            <PlausibleProvider domain='jamiesonroberts.com'
                               trackOutboundLinks={true}>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </PlausibleProvider>
        )
    }
}

export default MyApp
