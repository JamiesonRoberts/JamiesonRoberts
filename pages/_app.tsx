import React from 'react'

import SiteLayout from '../layouts/SiteLayout'
import '../layouts/baseline.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}
