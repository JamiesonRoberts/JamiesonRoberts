/**
 * NOTE: This requires `@sentry/nextjs` version 7.3.0 or higher.
 *
 * NOTE: If using this with `next` version 12.2.0 or lower, uncomment the
 * penultimate line in `CustomErrorComponent`.
 *
 * This page is loaded by Nextjs:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React lifecycle method throws or rejects, and it's
 *    caught by the built-in Nextjs error boundary
 *
 * See:
 *  - https://nextjs.org/docs/basic-features/data-fetching/overview
 *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
 *  - https://reactjs.org/docs/error-boundaries.html
 */

import * as Sentry from '@sentry/nextjs'
import NextErrorComponent from 'next/error'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import badge from '../public/jr-badge.png'

const layoutStyles = {
    minHeight: 'calc(100vh - 2rem)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const CustomErrorComponent = (props) => {
    // If you're using a Nextjs version prior to 12.2.1, uncomment this to
    // compensate for https://github.com/vercel/next.js/issues/8592
    // Sentry.captureUnderscoreErrorException(props);
    return (
        <>
            <Head>
                <title>{props.statusCode} - An Error Occurred</title>
            </Head>

            <main style={layoutStyles}>
                <Image
                    src={badge}
                    alt='A blue circle with the letters JR in white.'
                    width={75}
                    height={75}
                    sizes={'75px'}
                />
                <h1>{props.statusCode} - An Error Occurred</h1>
                <Link href={'/'}>Return back to the main page</Link>
            </main>
        </>
    )
}

CustomErrorComponent.getInitialProps = async (contextData) => {
    // In case this is running in a serverless function, await this in order to give Sentry
    // time to send the error before the lambda exits
    await Sentry.captureUnderscoreErrorException(contextData)

    // This will contain the status code of the response
    return NextErrorComponent.getInitialProps(contextData)
}

export default CustomErrorComponent
