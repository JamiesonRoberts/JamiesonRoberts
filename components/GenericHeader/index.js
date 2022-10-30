import styles from './index.module.css'
import classNames from 'classnames'

export default function GenericHeader ({children, ...rest }) {
    return (
        <header {...rest}
                className={rest.className}
                role={'banner'}
        >
            <div className={classNames(styles.simpleHeader, 'wrapper')}>
                { children }
            </div>
        </header>
    )
}
