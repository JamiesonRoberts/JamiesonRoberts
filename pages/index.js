import Image from 'next/image'
import profilePic from '../public/headshot.jpg'

function Home () {
    return (
        <>
            <a href={'#main'} role={'button'}>Skip to the main content</a>
            <header role={'banner'} id={'header'}>
                <nav role={'navigation'} id={'nav'} aria-label={'Navigation for page Subsections'}></nav>
            </header>
            <main role={'main'} id={'main'}>
                <Image
                    src={profilePic}
                    alt='A grayscale image of Jamieson Roberts in a dark collared shirt appearing in front of a white background wall.'
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    priority
                />
                <h1>{'Hi, I\'m Jamieson.'}<br />{'I\'m a software engineer.'}</h1>
                <p>I have over 15 years experience with web and software development. I'm currently a Senior Front End Developer at SAXX.</p>
            </main>
            <footer role={'contentinfo'} id={'footer'}></footer>
        </>
    )
}

export default Home
