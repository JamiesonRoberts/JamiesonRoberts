import Image from 'next/image'

import styles from './index.module.css'
export default function ExperienceCard({
    company,
    image: { src, alt, width = 50, height = 50 },
    title,
    type = null,
    date,
}) {
    return (
        <div className={styles.card}>
            <Image src={src} alt={alt} width={width} height={height} />
            <div className={styles.content}>
                <strong className={styles.company}>{company}</strong>
                <span>{title}</span>
                {type && <span>{type}</span>}
                <time>{date}</time>
            </div>
        </div>
    )
}
