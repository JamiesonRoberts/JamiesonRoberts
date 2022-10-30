import Link from 'next/link'

import GenericHeader from '../components/GenericHeader'
import Main from '../components/Main'
import Footer from '../components/Footer'

import styles from  '../styles/pages/policies.module.css'

function Home () {
    return (
        <div className={styles.layout}>
            <GenericHeader className={styles.header} data-color-scheme={'light'}>
                <h1>Policies</h1>
                <Link href={'/'} passHref>
                    <a title={'Link back to the home page'} className={'ctaButton'}>&larr;&nbsp;Back</a>
                </Link>
            </GenericHeader>
            <Main className={styles.main} data-color-scheme={'dark'}>
                <h2>Accessibility Policy</h2>
                <h2>Privacy and Data Removal</h2>
            </Main>
            <Footer className={styles.footer} data-color-scheme={'dark'} />
        </div>
    )
}

export default Home
