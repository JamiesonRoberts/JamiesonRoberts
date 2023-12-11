'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error)
  }, [error])

  return (
    <div
      style={{
        paddingBottom: '2rem',
        paddingTop: '2rem',
        textAlign: 'center',
      }}
    >
      <Image
        src={'/jr-badge.png'}
        alt='A blue circle with the letters JR in white.'
        width={75}
        height={75}
        sizes={'75px'}
      />
      <h1>Whoops - Something didn&apos;t quite go right there</h1>
      <Link href='/'>Return back to the main page</Link>
    </div>
  )
}
