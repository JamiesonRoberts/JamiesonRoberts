import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import StructuredData from '../components/StructuredData'
import classNames from 'classnames'

function Home() {
    return (
        <>
            <Head>
                <title>{`Hi, I'm Jamieson Roberts. I create digital things.`}</title>
                <meta
                    name='title'
                    content="Hi, I'm Jamieson Roberts. I create digital things."
                />
                <meta
                    name='description'
                    content='Parent, bicycle rider, geek, a video and board gamer, beer aficionado, coffee addict, and sci-fi junky. I love to create things digitally.'
                />

                <meta property='og:type' content='website' />
                <meta
                    property='og:url'
                    content={`${process.env.SITE_PUBLIC_URL}`}
                />
                <meta
                    property='og:title'
                    content="Hi, I'm Jamieson Roberts. I create digital things."
                />
                <meta
                    property='og:description'
                    content='Parent, bicycle rider, geek, a video and board gamer, beer aficionado, coffee addict, and sci-fi junky. I love to create things digitally.'
                />
                <meta
                    property='og:image'
                    content={`${process.env.SITE_PUBLIC_URL}/sharing-image.jpg`}
                />

                <meta property='twitter:card' content='summary_large_image' />
                <meta
                    property='twitter:url'
                    content={`${process.env.SITE_PUBLIC_URL}`}
                />
                <meta
                    property='twitter:title'
                    content="Hi, I'm Jamieson Roberts. I create digital things."
                />
                <meta
                    property='twitter:description'
                    content='Parent, bicycle rider, geek, a video and board gamer, beer aficionado, coffee addict, and sci-fi junky. I love to create things digitally.'
                />
                <meta
                    property='twitter:image'
                    content={`${process.env.SITE_PUBLIC_URL}/sharing-image.jpg`}
                />

                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href={`${process.env.SITE_PUBLIC_URL}/apple-touch-icon.png`}
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href={`${process.env.SITE_PUBLIC_URL}/favicon-32x32.png`}
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href={`${process.env.SITE_PUBLIC_URL}/favicon-16x16.png`}
                />
                <link
                    rel='manifest'
                    href={`${process.env.SITE_PUBLIC_URL}/site.webmanifest`}
                />
                <link
                    rel='mask-icon'
                    href={`${process.env.SITE_PUBLIC_URL}/safari-pinned-tab.svg`}
                    color='#4863a9'
                />
                <meta name='msapplication-TileColor' content='#ffffff' />

                <meta
                    name='theme-color'
                    content='#F7F7F7'
                    media='(prefers-color-scheme: light)'
                />
                <meta
                    name='theme-color'
                    content='#1C1C1B'
                    media='(prefers-color-scheme: dark)'
                />
            </Head>
            <div className={'layout'}>
                <Header className={classNames('header', 'wrapper')} />
                <Main className={classNames('main')} />
                <Footer className={classNames('footer', 'wrapper')} />
            </div>
            <StructuredData />
        </>
    )
}

export default Home
