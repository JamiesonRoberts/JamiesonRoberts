import Header from '../components/Header';

import styles from  '../styles/pages/index.module.css'

function Home () {
    return (
        <div className={styles.layout}>
            <a href={'#main'} role={'button'} className={styles.skipLink} data-color-scheme={'dark'}>Skip to the main content</a>
            <Header role={'banner'} id={'header'} className={styles.header} data-color-scheme={'light'} />
            <main role={'main'} id={'main'} className={styles.main} data-color-scheme={'dark'}>
            </main>
            <footer role={'contentinfo'} id={'footer'} className={styles.footer} data-color-scheme={'dark'}>
                &copy;2022 Jamieson Roberts.
            </footer>
        </div>
    )
}

export default Home
