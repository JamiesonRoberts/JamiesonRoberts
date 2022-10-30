import Image from 'next/future/image'

import profilePic from '../../public/headshot.jpg'
import styles from './index.module.css'

export default function Header (props) {
    return (
        <header {...props}
                className={props.className}
                role={'banner'}
        >
            <div className={styles.intro}>
                <Image
                    src={profilePic}
                    alt='A grayscale image of Jamieson Roberts in a dark collared shirt appearing in front of a white background wall.'
                    width={320}
                    height={320}
                    placeholder='blur'
                    layout={'responsive'}
                    className={styles.profileImage}
                    sizes='(min-width: 350px) 320w,
                          90vw'
                    priority
                />
                <div className={styles.copy}>
                    <h1>Hi, I&apos;m Jamieson Roberts.</h1>
                    <p>Father, geek, gamer, beer aficionado, coffee enthusiast,
                        and sci-fi junky. Full time code monkey with over 15
                        years professional experience with web and
                        software development. I love to create things digitally.
                        Currently a Senior Front End Developer at <a
                            href={'https://www.saxxunderwear.com/'}
                            rel={'noopener noreferrer'}
                            target={'_blank'}
                            title={'SAXX Underwear'}
                        >
                            @SAXX
                        </a>.
                    </p>
                </div>
            </div>
            <div className={styles.connections}>
                <ul aria-label={'A list of other websites that Jamieson is active on, links will open new tabs or windows.'}>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Dev.to</li>
                </ul>
                <a
                    href={' mailto:hello@jamiesonroberts.com?subject=Lets%20connect%20via%20email%20from%20jamiesonroberts.com '}
                    className={'ctaButton'}
                >
                    Let&apos;s Connect via email
                </a>
            </div>
        </header>
    )
}
