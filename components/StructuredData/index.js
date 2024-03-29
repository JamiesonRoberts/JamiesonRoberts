const personJsonLd = {
  '@context': 'https://www.schema.org',
  '@type': 'Person',
  '@id': 'https://jamiesonroberts.com/#person',
  name: 'Jamieson Roberts',
  nationality: 'Canadian',
  hasOfferCatalog: {
    '@id': '#OfferCatalog',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Western University',
      sameAs: 'https://www.uwo.ca/',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: 'Bachelor',
      about: {
        '@type': 'EducationalOccupationalProgram',
        educationalCredentialAwarded: 'Bachelor of Musical Arts - Music',
        startDate: '2005',
        endDate: '2010',
        provider: {
          '@type': 'CollegeOrUniversity',
          name: 'The University of Western Ontario',
          sameAs: 'https://uwo.ca',
        },
      },
    },
  ],
  gender: 'Male',
  description: 'Digital Creator',
  jobTitle: 'Senior Front End Developer',
  worksFor: [
    {
      '@type': 'Organization',
      name: 'SAXX Underwear Co.',
      sameAs: [
        'https://www.saxxunderwear.com/',
        'https://www.saxxunderwear.ca/',
        'https://intl.saxx.com/',
        'https://www.instagram.com/saxxunderwear/',
        'https://www.facebook.com/Saxxunderwear',
        'https://twitter.com/saxxunderwear',
        'https://www.linkedin.com/company/saxx-underwear-co-/about/',
      ],
    },
  ],
  url: 'https://jamiesonroberts.com',
  image: 'https://s.gravatar.com/avatar/0a53dca8faa5b427a1bed8f775100b83?s=900',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressRegion: 'ON',
    addressCountry: 'Canada',
  },
  sameAs: [
    'https://twitter.com/jamiesonroberts',
    'https://github.com/JamiesonRoberts',
    'https://dev.to/jamiesonroberts',
    'https://www.linkedin.com/in/jamiesonroberts',
    'https://www.facebook.com/jamieson.roberts/',
    'https://www.instagram.com/jamiesonroberts/',
    'https://steamcommunity.com/id/jedispara/',
    'https://www.twitch.tv/jedispara',
  ],
}
const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': '#OfferCatalog',
  name: 'Services',
  itemListElement: [
    {
      '@type': 'OfferCatalog',
      name: 'Web development and related services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical SEO',
          },
        },
      ],
    },
  ],
}
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://jamiesonroberts.com/#website',
  url: 'https://jamiesonroberts.com/',
  image: 'https://jamiesonroberts.com/headshot.jpg',
  inLanguage: 'en-CA',
  author: 'Jamieson Roberts',
  keywords: 'Jamieson Roberts',
  accountablePerson: {
    '@id': 'https://jamiesonroberts.com/#person',
  },
  about: {
    '@id': 'https://jamiesonroberts.com/#person',
  },
}
export default function StructuredData() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
        key={'Person-jsonld'}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerCatalogJsonLd),
        }}
        key={'OfferCatalog-jsonld'}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
        key={'Website-jsonld'}
      />
    </>
  )
}
