import Head from 'next/head'
import classNames from 'classnames'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

import StructuredData from '@/components/StructuredData'

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
                <meta property='og:url' content='https://jamiesonroberts.com' />
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
                    content='https://jamiesonroberts.com/sharing-image.jpg'
                />

                <meta property='twitter:card' content='summary_large_image' />
                <meta
                    property='twitter:url'
                    content='https://jamiesonroberts.com/'
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
                    content='https://jamiesonroberts.com/sharing-image.jpg'
                />
                <link rel='canonical' href='https://jamiesonroberts.com' />
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
