import Head from 'next/head'

import GenericHeader from '../components/GenericHeader'
import Main from '../components/Main'
import Footer from '../components/Footer'

import styles from  '../styles/pages/policies.module.css'

function Home () {
    return (
        <>
            <Head>
                <title>
                    {`Jamieson Roberts | Digital Policies`}
                </title>
                <meta
                    name={'description'}
                    content={`You know the drill, here are the digital polices for the website including privacy and accessibility.`}
                    key={'desc'}
                />
            </Head>
            <div className={styles.layout}>
                <GenericHeader className={styles.header} data-color-scheme={'light'}>
                    <h1>Policies</h1>
                </GenericHeader>
                <Main className={styles.main} data-color-scheme={'dark'}>
                    <h2>Accessibility Policy</h2>
                    <h2>Privacy and Data Removal</h2>
                </Main>
                <Footer className={styles.footer} data-color-scheme={'dark'} />
            </div>
        </>
    )
}

export default Home
