import Head from 'next/head'

import Header from '../components/HomeHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';

import styles from  '../styles/pages/index.module.css';

function Home () {
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
            </Head>
            <div className={styles.layout}>
                <Header className={styles.header} data-color-scheme={'light'} />
                <Main className={styles.main} data-color-scheme={'dark'}>
                    <h2>About</h2>
                </Main>
                <Footer className={styles.footer} data-color-scheme={'dark'} />
            </div>
        </>
    )
}

export default Home
