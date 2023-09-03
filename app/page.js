import classNames from 'classnames'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata = {
    title: "Hi, I'm Jamieson Roberts. I create digital things.",
    description:
        'Parent, bicycle rider, geek, a video and board gamer, beer aficionado, coffee addict, and sci-fi junky. I love to create things digitally.',
}

export default function Page() {
    return (
        <>
            <div className={'layout'}>
                <Header className={classNames('header', 'wrapper')} />
                <Main className={classNames('main')} />
                <Footer className={classNames('footer', 'wrapper')} />
            </div>
            <StructuredData />
        </>
    )
}
