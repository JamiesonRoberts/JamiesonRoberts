import Image from 'next/image'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

import profilePic from '../../public/headshot.jpg'
import styles from './index.module.css'

export default function Header(props) {
    const plausible = usePlausible()

    return (
        <header {...props} className={props.className} role={'banner'}>
            <Image
                src={profilePic}
                alt='A grayscale image of Jamieson Roberts in a dark collared shirt appearing in front of a white background wall.'
                width={320}
                height={320}
                className={styles.profileImage}
                sizes={'(min-width: 480px) 400px, 82vw'}
                priority
            />

            <h1>Hi, I&apos;m Jamieson Roberts.</h1>
            <p>
                Parent, bicycle rider, geek, a video and board gamer, beer
                aficionado, coffee addict, and sci-fi junky. Full time software
                engineer with over 15 years professional experience with web and
                software development. I love to create things digitally.
                Currently a Senior Front End Developer @{' '}
                <a
                    href={'https://www.saxxunderwear.com/'}
                    rel={'noopener noreferrer'}
                    target={'_blank'}
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
                onClick={() => {
                    plausible('Email CTA: Click')
                }}
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
                <li>
                    <Link
                        href={'https://github.com/JamiesonRoberts'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on Github'}
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 496 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                            />
                        </svg>
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
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z'
                            />
                        </svg>
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
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
                            />
                        </svg>
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
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                            />
                        </svg>
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
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'
                            />
                        </svg>
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
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                            />
                        </svg>
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
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 640 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z'
                            />
                        </svg>
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
                        alt={'Connect with Jamieson on Steam'}
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 496 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z'
                            />
                        </svg>
                        <span className={'sr-only'}>
                            Connect with Jamieson on Steam in a new window
                        </span>
                    </Link>
                </li>
                <li className={styles.externalLinkItem}>
                    <Link
                        href={'https://www.twitch.tv/jedispara'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        alt={'Connect with Jamieson on Twitch.tv'}
                        className={styles.externalLink}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                            aria-hidden={true}
                            focusable={false}
                            className={styles.externalLinkSVGIcon}
                        >
                            <path
                                fill={'currentColor'}
                                d='M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z'
                            />
                        </svg>
                        <span className={'sr-only'}>
                            Connect with Jamieson on Twitch.tv
                        </span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
