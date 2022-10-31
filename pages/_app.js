import App from 'next/app'
import { Roboto_Flex } from '@next/font/google'

import PlausibleProvider from 'next-plausible'

import '/styles/styles.css'

const roboto = Roboto_Flex({
    variable: '--primary-font',
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap'
})

const SiteLayout = ({ children }) => {
    return (
        <div className={roboto.variable}>
            {children}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://www.schema.org",
                        "@type": "Person",
                        "@id": "https://jamiesonroberts.com/#person",
                        "name": "Jamieson Roberts",
                        "nationality": "Canadian",
                        "hasOfferCatalog": {
                            "@id": "#OfferCatalog"
                        },
                        "birthPlace": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "London",
                                "addressRegion": "ON",
                                "addressCountry": "Canada"
                            }
                        },
                        "alumniOf": [
                            {
                                "@type": "CollegeOrUniversity",
                                "name": "Western University",
                                "sameAs": "https://www.uwo.ca/"
                            }
                        ],
                        "gender": "Male",
                        "description": "Digital Creator",
                        "jobTitle": "Senior Front End Developer",
                        "worksFor": [
                            {
                                "@type": "Organization",
                                "name": "SAXX Underwear Co.",
                                "sameAs": [
                                    "https://twitter.com/saxxunderwear"
                                ]
                            }
                        ],
                        "workLocation": [
                        ],
                        "url": "https://jamiesonroberts.com",
                        "image": "TBD",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "London",
                            "addressRegion": "ON",
                            "addressCountry": "Canada"
                        },
                        "sameAs": [
                            "https://twitter.com/jamiesonroberts"
                        ]
                    }`
                }}
                key={'Person-jsonld'}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "OfferCatalog",
                        "@id": "#OfferCatalog",
                        "name": "Services",
                        "itemListElement": [
                            {
                                "@type": "OfferCatalog",
                                "name": "Web development and related services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Web Development"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Software Development"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Technical SEO"
                                        }
                                    }
                                ]
                            }
                        ]
                    }`
                }}
                key={'OfferCatalog-jsonld'}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        "@id": "https://jamiesonroberts.com/#website",
                        "url": "https://jamiesonroberts.com",
                        "image": "TBD",
                        "inLanguage": "en-CA",
                        "author": "Jamieson Roberts",
                        "keywords": "Jamieson Roberts",
                        "accountablePerson": {
                            "@id": "https://jamiesonroberts.com/#person"
                        },
                        "about": {
                            "@id": "https://jamiesonroberts.com/#person"
                        }
                    }`
                }}
                key={'Website-jsonld'}
            />
        </div>
    )
}

class MyApp extends App {
    render () {
        const {
            Component,
            pageProps
        } = this.props
        return (
            <PlausibleProvider domain='jamiesonroberts.com'
                               trackOutboundLinks={true}>
                <SiteLayout>
                    <Component {...pageProps} />
                </SiteLayout>
            </PlausibleProvider>
        )
    }
}

export default MyApp
