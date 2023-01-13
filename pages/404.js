import Link from 'next/link'
import Image from 'next/image'
import badge from '../public/jr-badge.png'

const layoutStyles = {
    minHeight: 'calc(100vh - 2rem)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

export default function Custom404() {
    return (
        <div style={layoutStyles}>
            <Image
                src={badge}
                alt='A blue circle with the letters JR in white.'
                width={75}
                height={75}
                sizes={'75px'}
            />
            <h1>404 - Page Not Found</h1>
            <Link href={'/'}>Return back to the main page</Link>
        </div>
    )
}
