import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Whoops, something went wrong.',
}

export default function NotFound() {
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
      <h1>404 - Page Not Found</h1>
      <Link href='/'>Return back to the main page</Link>
    </div>
  )
}
