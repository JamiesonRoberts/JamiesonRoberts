import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faTwitter,
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub,
    faDev,
    faDiscord,
    faSteam,
    faTwitch,
} from '@fortawesome/free-brands-svg-icons'

import profilePic from '../../public/headshot.jpg'
import styles from './index.module.css'
import Link from 'next/link'

export default function Header(props) {
    return (
        <header {...props} className={props.className} role={'banner'}>
            <Image
                src={profilePic}
                alt='A grayscale image of Jamieson Roberts in a dark collared shirt appearing in front of a white background wall.'
                width={320}
                height={320}
                className={styles.profileImage}
                layout={'responsive'}
                priority={true}
            />

            <h1>Hi, I&apos;m Jamieson Roberts.</h1>
            <p>
                Parent, bicycle rider, geek, a video and board gamer, beer
                aficionado, coffee junky, and sci-fi enthusiast. Full time
                software engineer with over 15 years professional experience
                with web and software development. I love to create things
                digitally. Currently a Senior Front End Developer @{' '}
                <a
                    href={'https://www.saxxunderwear.com/'}
                    rel={'noopener noreferrer'}
                    target={'_blank'}
                    title={'SAXX'}
                >
                    SAXX
                </a>
                .
            </p>
            <p>
                <strong>Availability:</strong> Open to projects, let&apos;s
                chat.
            </p>
            <a
                href={
                    ' mailto:hello@jamiesonroberts.com?subject=Lets%20connect%20via%20email%20from%20jamiesonroberts.com '
                }
                className={'cta'}
            >
                Let&apos;s Connect via email
            </a>
            <p style={{ marginBottom: 0 }}>
                <strong>Other Places to connect with me:</strong>
            </p>
            <ul
                aria-label={
                    'A list of other websites and services that Jamieson is active on, links will open new tabs or windows.'
                }
                className={styles.externalLinkList}
            >
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://github.com/JamiesonRoberts'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on Github'}
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson on Github in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://dev.to/jamiesonroberts'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on dev.to'}
                    >
                        <FontAwesomeIcon
                            icon={faDev}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson on Dev.to in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://www.linkedin.com/in/jamiesonroberts'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on LinkedIn'}
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson on LinkedIn in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://twitter.com/JamiesonRoberts'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on Twitter'}
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson on Twitter in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://www.facebook.com/jamieson.roberts/'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on Facebook'}
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson on Facebook in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://www.instagram.com/jamiesonroberts/'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on Instagram'}
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson on Instagram in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'http://discordapp.com/users/184527849850535936'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on Discord'}
                    >
                        <FontAwesomeIcon
                            icon={faDiscord}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson on Discord in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://steamcommunity.com/id/jedispara/'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={
                            'Connect with Jamieson playing video games on Steam'
                        }
                    >
                        <FontAwesomeIcon
                            icon={faSteam}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson playing video games on Steam
                            in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://www.twitch.tv/jedispara'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on Twitch.tv'}
                    >
                        <FontAwesomeIcon
                            icon={faTwitch}
                            ariaHidden={true}
                            focusable={false}
                        />
                        <span className={'sr-only'}>
                            Connect with Jamieson on Twitch.tv
                        </span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
