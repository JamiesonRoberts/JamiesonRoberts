'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Error() {
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
