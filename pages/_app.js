import React from 'react'

import SiteLayout from 'layouts/SiteLayout'
import 'layouts/baseline.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <SiteLayout>
            <Component {...pageProps} />
        </SiteLayout>
    )
}
