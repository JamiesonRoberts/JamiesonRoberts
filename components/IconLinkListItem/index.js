import Link from 'next/link'

import styles from './index.module.css'

export default function IconLinkListItem({ href, text, viewBox, svgPath }) {
  return (
    <li>
      <Link
        href={href}
        target={'_blank'}
        rel={'noopener noreferrer'}
        alt={text}
        className={styles.link}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={viewBox}
          aria-hidden={true}
          focusable={false}
          className={styles.svgIcon}
        >
          <path fill={'currentColor'} d={svgPath} />
        </svg>
        <span className={styles.srOnly}>{text} in a new window</span>
      </Link>
    </li>
  )
}
