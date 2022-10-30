import Link from 'next/link'
import classNames from 'classnames'

import styles from './index.module.css'

export default function GenericHeader ({children, ...rest }) {
    return (
        <header {...rest}
                className={rest.className}
                role={'banner'}
        >
            <div className={classNames(styles.simpleHeader, 'wrapper')}>
                { children }
                <Link href={'/'} title={'Link back to the home page'} className={'ctaButton'}>
                    &larr;&nbsp;Back
                </Link>
            </div>
        </header>
    )
}
