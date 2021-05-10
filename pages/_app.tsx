import '@/layouts/baseline.css'

import { AppProps } from 'next/app'

import SiteLayout from '@/layouts/SiteLayout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}
