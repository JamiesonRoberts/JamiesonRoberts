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
                <title>
                    {`Hi, I'm Jamieson Roberts. I create digital things.`}
                </title>
                <meta
                    name={'description'}
                    content={`Father, geek, gamer, beer aficionado, coffee enthusiast, and sci-fi junky. I love to create things digitally and have over 15 years professional experience.`}
                    key={'desc'}
                />

                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
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
                <Main className={classNames('main', 'wrapper')} />
                <Footer className={classNames('footer', 'wrapper')} />
            </div>
            <StructuredData />
        </>
    )
}

export default Home
