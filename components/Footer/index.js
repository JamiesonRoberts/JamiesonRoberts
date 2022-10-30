import Link from 'next/link'

export default function Header (props) {
    return (
        <footer {...props}
                className={props.className}
                role={'contentinfo'}
        >
            &copy;2022 Jamieson Roberts. <Link href={'/policies'}>Policies</Link> | <a href={'https://plausible.io/jamiesonroberts.com/'} target={'_blank'} rel="noopener noreferrer">Analytics</a>
        </footer>
    )
}
