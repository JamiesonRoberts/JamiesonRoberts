import Image from 'next/image'

import styles from './index.module.css'

import saxx from '../../public/logos/saxx.png'
import jrBadge from '../../public/jr-badge.png'

import arcane from '../../public/logos/arcane.png'
import western from '../../public/logos/western.png'
import mld from '../../public/logos/mld.png'

import lcl from '../../public/logos/lcl.png'
import cac from '../../public/logos/cac.png'
import projectPlay from '../../public/logos/projectPlay.png'
import learningCode from '../../public/logos/clc.png'
import amabile from '../../public/logos/amabile.png'

export default function Main({ children, ...rest }) {
    return (
        <main {...rest} className={rest.className} role={'main'}>
            <section className={'wrapper'}>
                <h2>Experience</h2>
                <h3>Current</h3>
                <div className={styles.cardList}>
                    <div className={styles.experienceCard}>
                        <Image
                            src={saxx}
                            width={50}
                            height={50}
                            alt={'The logo for SAXX'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                SAXX
                            </strong>
                            <span>Senior Front-End Developer</span>
                            <span>Permanent Full-Time &ndash; Remote</span>
                            <time>February 2021 &mdash; Present</time>
                        </div>
                    </div>
                    <div className={styles.experienceCard}>
                        <Image
                            src={jrBadge}
                            width={50}
                            height={50}
                            alt={'A blue circle with the letters JR in white'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                Jamieson Roberts
                            </strong>
                            <span>Self-Employed</span>
                            <time>May 2009 &mdash; Present</time>
                        </div>
                    </div>
                </div>
                <h3>Previous</h3>
                <div className={styles.cardList}>
                    <div className={styles.experienceCard}>
                        <Image
                            src={arcane}
                            width={50}
                            height={50}
                            alt={'The logo for Arcane'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                Arcane
                            </strong>
                            <span>Senior Web Developer</span>
                            <span>Permanent Full-Time &ndash; Hybrid</span>
                            <time>February 2015 &mdash; February 2021</time>
                        </div>
                    </div>
                    <div className={styles.experienceCard}>
                        <Image
                            src={western}
                            width={50}
                            height={61}
                            alt={'The logo for Western University'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                Western University
                            </strong>
                            <span>Web Developer</span>
                            <span>Contract Full-Time &ndash; On-site</span>
                            <time>August 2014 &mdash; February 2015</time>
                        </div>
                    </div>
                    <div className={styles.experienceCard}>
                        <Image
                            src={mld}
                            width={50}
                            height={50}
                            alt={'The Logo for MLD Solutions'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                MLD Solutions
                            </strong>
                            <span>Programmer</span>
                            <span>Contract Part-Time &ndash; On-Site</span>
                            <time>April 2011 &mdash; September 2011</time>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'wrapper'}>
                <h2>Community Involvement</h2>
                <h3>Current</h3>
                <div className={styles.cardList}>
                    <div className={styles.experienceCard}>
                        <Image
                            src={lcl}
                            width={50}
                            height={50}
                            alt={'The logo for London Cycle Link'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                London Cycle Link
                            </strong>
                            <span>Advocacy Committee Member</span>
                            <time>July 2022 &mdash; Present</time>
                        </div>
                    </div>
                </div>
                <h3>Previous</h3>
                <div className={styles.cardList}>
                    <div className={styles.experienceCard}>
                        <Image
                            src={cac}
                            width={50}
                            height={50}
                            alt={'The logo for the City of London, Canada'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                City of London Cycling Advisory Committee
                            </strong>
                            <span>Committee Chair</span>
                            <time>August 2019 &mdash; April 2022</time>
                        </div>
                    </div>
                    <div className={styles.experienceCard}>
                        <Image
                            src={projectPlay}
                            width={50}
                            height={50}
                            alt={'The logo for Project Play'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                Project Play
                            </strong>
                            <span>Event Coordinator</span>
                            <time>September 2012 &mdash; September 2017</time>
                        </div>
                    </div>
                    <div className={styles.experienceCard}>
                        <Image
                            src={learningCode}
                            width={50}
                            height={50}
                            alt={'The logo for Canada Learning Code'}
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                Canada Learning Code <br />{' '}
                                <small>(Formerly Ladies Learning Code)</small>
                            </strong>
                            <span>Mentor</span>
                            <time>January 2013 &mdash; January 2014</time>
                        </div>
                    </div>
                    <div className={styles.experienceCard}>
                        <Image
                            src={amabile}
                            width={50}
                            height={50}
                            alt={
                                'The logo for Amabile Choirs of London, Canada'
                            }
                        />
                        <div className={styles.experienceCardContent}>
                            <strong
                                className={styles.experienceCardContentCompany}
                            >
                                Amabile Boys and Men&apos;s Choirs
                            </strong>
                            <span>Co-Manager</span>
                            <time>September 2010 &mdash; May 2014</time>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
