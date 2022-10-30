import Header from '../components/HomeHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';

import styles from  '../styles/pages/index.module.css';

function Home () {
    return (
        <div className={styles.layout}>
            <Header className={styles.header} data-color-scheme={'light'} />
            <Main className={styles.main} data-color-scheme={'dark'}>
                <h2>About</h2>
            </Main>
            <Footer className={styles.footer} data-color-scheme={'dark'} />
        </div>
    )
}

export default Home
