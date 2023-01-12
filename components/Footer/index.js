import Link from 'next/link'
import Image from 'next/image'
import badge from '../../public/jr-badge.png'

export default function Header(props) {
    return (
        <footer {...props} className={props.className} role={'contentinfo'}>
            <Link
                href={'https://plausible.io/jamiesonroberts.com/'}
                target={'_blank'}
                rel={'noopener noreferrer'}
                alt={'View open analytics data about this site'}
            >
                Analytics
            </Link>
            <p>Copyright &copy; 2023 Jamieson Roberts.</p>
            <Image
                src={badge}
                alt='A blue circle with the letters JR over top of the background.'
                width={75}
                height={75}
                sizes={'75px'}
                priority={false}
            />
        </footer>
    )
}
