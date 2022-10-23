import Image from 'next/future/image'
import classNames from 'classnames'

import styles from './index.module.css';
import profilePic from '../../public/headshot.jpg'

export default function Header (props) {
    return (
        <header {...props} className={classNames(props.className, styles.header)}>
            <Image
                src={profilePic}
                alt='A grayscale image of Jamieson Roberts in a dark collared shirt appearing in front of a white background wall.'
                width={320}
                height={320}
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder='blur' // Optional blur-up while loading
                layout={'responsive'}
                className={styles.profileImage}
                sizes="(min-width: 350px) 320w,
                      90vw"
                priority
            />
            <h1>{'Hi, I\'m Jamieson Roberts.'}<br />{'I\'m a creator.'}</h1>
            <p>I have over 15 years professional experience with web and
                software
                development. I'm currently a Senior Front End Developer at
                SAXX.</p>
            <nav role={'navigation'} id={'nav'}
                 aria-label={'Navigation for page Subsections'}></nav>
        </header>
    )
}
