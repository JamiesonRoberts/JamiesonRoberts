import CardList from '@/components/CardList'
import ExperienceCard from '@/components/ExperienceCard'

export const metadata = {
    title: "Hi, I'm Jamieson Roberts. I create digital things.",
    description:
        'Parent, bicycle rider, geek, a video and board gamer, beer aficionado, coffee addict, and sci-fi junky. I love to create things digitally.',
}

export default function Page() {
    return (
        <>
            <section style={{ paddingBottom: '1.5rem' }}>
                <h2>Experience</h2>
                <h3>Current</h3>
                <CardList>
                    <ExperienceCard
                        company={'SAXX'}
                        image={{
                            src: '/logos/saxx.png',
                            alt: 'The logo for SAXX',
                        }}
                        title={'Senior Front-End Developer'}
                        type={<>Permanent Full-Time &ndash; Remote</>}
                        date={<>February 2021 &mdash; Present</>}
                    />
                    <ExperienceCard
                        company={'Jamieson Roberts'}
                        image={{
                            src: '/jr-badge.png',
                            alt: 'A blue circle with the letters JR in white',
                        }}
                        title={'Self-Employed'}
                        date={<>May 2009 &mdash; Present</>}
                    />
                </CardList>
                <h3>Previous</h3>
                <CardList>
                    <ExperienceCard
                        company={'Arcane'}
                        image={{
                            src: '/logos/arcane.png',
                            alt: 'The logo for Arcane',
                        }}
                        title={'Senior Web Developer'}
                        type={<>Permanent Full-Time &ndash; Hybrid</>}
                        date={<>February 2015 &mdash; February 2021</>}
                    />
                    <ExperienceCard
                        company={'Western University'}
                        image={{
                            src: '/logos/western.png',
                            alt: 'The logo for Western University',
                            height: 61,
                        }}
                        title={'Web Developer'}
                        type={<>Contract Full-Time &ndash; On-site</>}
                        date={<>August 2014 &mdash; February 2015</>}
                    />
                    <ExperienceCard
                        company={'MLD Solutions'}
                        image={{
                            src: '/logos/mld.png',
                            alt: 'The Logo for MLD Solutions',
                        }}
                        title={'Programmer'}
                        type={<>Contract Part-Time &ndash; On-Site</>}
                        date={<>April 2011 &mdash; September 2011</>}
                    />
                </CardList>
            </section>
            <section>
                <h2>Community Involvement</h2>
                <h3>Current</h3>
                <CardList>
                    <ExperienceCard
                        company={'London Cycle Link'}
                        image={{
                            src: '/logos/lcl.png',
                            alt: 'The logo for London Cycle Link',
                        }}
                        title={'Advocacy Committee Member'}
                        date={<>July 2022 &mdash; Present</>}
                    />
                </CardList>
                <h3>Previous</h3>
                <CardList>
                    <ExperienceCard
                        company={'City of London Cycling Advisory Committee'}
                        image={{
                            src: '/logos/cac.png',
                            alt: 'The logo for the City of London, Canada',
                        }}
                        title={'Committee Chair'}
                        date={<>August 2019 &mdash; April 2022</>}
                    />
                    <ExperienceCard
                        company={'Project Play'}
                        image={{
                            src: '/logos/projectPlay.png',
                            alt: 'The logo for Project Play',
                        }}
                        title={'Event Coordinator'}
                        date={<>September 2012 &mdash; September 2017</>}
                    />
                    <ExperienceCard
                        company={
                            <>
                                Canada Learning Code <br />{' '}
                                <small>(Formerly Ladies Learning Code)</small>
                            </>
                        }
                        image={{
                            src: '/logos/clc.png',
                            alt: 'The logo for Canada Learning Code',
                        }}
                        title={'Mentor'}
                        date={<>January 2013 &mdash; January 2014</>}
                    />
                    <ExperienceCard
                        company={<>Amabile Boys and Men&apos;s Choirs</>}
                        image={{
                            src: '/logos/amabile.png',
                            alt: 'The logo for the Amabile Choirs of London, Canada',
                        }}
                        title={'Co-Manager'}
                        date={<>September 2010 &mdash; May 2014</>}
                    />
                </CardList>
            </section>
        </>
    )
}
