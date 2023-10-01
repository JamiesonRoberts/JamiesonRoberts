import Link from 'next/link'

export default function NotFound() {
    return (
        <div
            style={{
                paddingBottom: '2rem',
                paddingTop: '2rem',
                textAlign: 'center',
            }}
        >
            <h2>404 - Page Not Found</h2>
            <Link href='/'>Return back to the main page</Link>
        </div>
    )
}
