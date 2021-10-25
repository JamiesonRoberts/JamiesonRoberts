import React from 'react'
import App from 'next/app'
import PlausibleProvider from 'next-plausible'

class MyApp extends App {
    render() {
        const {
            Component,
            pageProps
        } = this.props
        return (
            <PlausibleProvider domain='jamiesonroberts.com' trackOutboundLinks={true}>
                <Component {...pageProps} />
            </PlausibleProvider>
        )
    }
}

export default MyApp
